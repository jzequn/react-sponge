#!/usr/bin/env node

const { program } = require("commander");
const { createReactComponent } = require("../components/classComponent");
program.version("2.0.0").name("react-sponge").usage("command");

program
  .command("generate <type> <name>")
  .description("create react component")
  .alias("g")
  .option("-p,--preprocessor [value]", "css preprocessor to use")
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
