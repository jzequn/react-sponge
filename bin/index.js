#!/usr/bin/env node

const { program } = require("commander");
// const chalk = require('chalk')
const { createClassComponent } = require("../components/classComponent");
const {
  createFunctionalComponent,
} = require("../components/functionalComponent");
program.version("1.0.0").name("react-sponge");

// program
//   .option('-c, --class', 'create react class component',createClassComponent)
//   .option('-f, --funtional', 'create react functional component',createFunctionalComponent)

program
  .command("class")
  .description("create react class component")
  .alias("c")
  .action(()=>{
    
    createClassComponent();

  });

program
  .command("functional")
  .description("create functional component")
  .alias("f")
  .action(createFunctionalComponent);

program.parse(process.argv);


if(program.class){
  console.log(program.class);
}