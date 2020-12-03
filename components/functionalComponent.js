const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const template = (component) => `
import React from \"react\";
import \"./${component}.scss\";


const ${component} = () => (
      <>
      
      </>
)

export default ${component};
`;

const createFunctionalComponent = () => {
  rl.question("What is the folder name? ", function (folder_name) {
    rl.question("What is the file name? ", function (component) {
      console.log(
        `Your folder_name is ${folder_name}, your file name is ${component}.jsx and ${component}.scss `
      );

      // in root working directory -> 'root/src/...'
      const root_dir = path.join(process.cwd(), `./src/${folder_name}`);
      if (!fs.existsSync(root_dir)) {
        // create folder
        fs.mkdirSync(root_dir);
      }

      const jsxPath = `${root_dir}/${component}.jsx`;
      const scssPath = `${root_dir}/${component}.scss`;

      // create jsx file
      fs.writeFile(jsxPath, template(component), function (err) {
        if (err) return console.log(err);

        console.log(`${folder_name}/${component}.jsx created!!`);
      });
      // create scss file
      fs.writeFile(scssPath, "", function (err) {
        if (err) return console.log(err);

        console.log(`${folder_name}/${component}.scss created!!`);
      });

      rl.close();
    });
  });
};

exports.createFunctionalComponent = createFunctionalComponent;
