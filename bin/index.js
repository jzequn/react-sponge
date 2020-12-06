#!/usr/bin/env node

const { program } = require("commander");
const { createReactComponent } = require("../components/createReactComponent");
program.version("2.0.0").name("react-sponge").usage("command");

program
  .command("generate <type> <name>")
  .description("create react component", {
    type:
      "component type, which only accept one of [class, function, c, f], if wrong value provided, class or c will be chosen instead",
    name: "the path of the files to be generated",
  })
  .alias("g")
  .option(
    "-p,--preprocessor [value]",
    "extension of css preprocessor to use, e.g. css, scss, less. By default, css is the extension being used"
  )
  // .option("-t,--typescript", "use typescript instead of javascript")
  .action(function (type, name, options) {
    // console.log(
    //   "c/class",
    //   type,
    //   name,
    //   options.preprocessor,
    //   options.typescript
    // );
    createReactComponent(
      type,
      name,
      options.preprocessor,
      options.typescript ? true : false
    );
  });

program.parse(process.argv);
