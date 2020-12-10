const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const {
  classComponentTemplate,
  funtionalComponentTemplate,
} = require("./template");

const state = {
  template: null,
  preprocessor: "css",
  scriptType: "js",
  dir: "",
  filename: "",
  scriptPath: "",
  stylePath: "",
};

/**
 *@param {string} type
 *   type of component, either function or class. Value should be f or c
 *@param {string} name
 *   name for the component to be generated
 *@param {string} preprocessor
 *   the css preprocessor
 *@param {boolean} typescript
 *   should be typescript or not
 *
 */
const createReactComponent = (type, name, preprocessor, typescript) => {
  setUpState(type, name, preprocessor, typescript);

  // in root working directory -> 'root/src/...'
  const component_directory = path.join(process.cwd(), `./src/${state.dir}`);
  buildDirectories(component_directory);

  state.scriptPath = `${component_directory}/${state.filename}.${state.scriptType}`;
  state.stylePath = `${component_directory}/${state.filename}.${state.preprocessor}`;

  writeFiles(state.scriptPath, state.stylePath);
};

const setUpState = (type, name, preprocessor, typescript) => {
  state.template = chooseTemplate(type);
  state.preprocessor = preprocessor ? preprocessor : "css";
  state.scriptType = typescript ? "ts" : "js";
  parseName(name);
};
const parseName = (name) => {
  // split the name as directory and filename.
  // how to handle error? if there are special characters in the name?
  const regex = /\//g;
  const match = [...name.matchAll(regex)];

  if (!match || match.length === 0) {
    state.filename = name;
  } else {
    const lastFolderIndex = match[match.length - 1].index;

    // store them in state
    state.filename = name.substring(lastFolderIndex + 1);
    state.dir = name.substr(0, lastFolderIndex);
  }
};

const buildDirectories = (path) => {
  // build directories recursively with given path
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }
};

const writeFiles = (scriptPath, stylePath) => {
  // create script file
  fs.writeFile(
    scriptPath,
    state.template(state.filename, state.preprocessor),
    function (err) {
      if (err) return console.log(err);
      console.log(chalk.blue(`${scriptPath} created!!`));
    }
  );

  // create style file
  fs.writeFile(stylePath, "", function (err) {
    if (err) return console.log(err);
    console.log(chalk.blue(`${stylePath} created!!`));
  });
};

const chooseTemplate = (type) => {
  switch (type) {
    case "class":
      return classComponentTemplate;
    case "c":
      return classComponentTemplate;
    case "function":
      return funtionalComponentTemplate;
    case "f":
      return funtionalComponentTemplate;
    default:
      return classComponentTemplate;
  }
};

exports.createReactComponent = createReactComponent;
