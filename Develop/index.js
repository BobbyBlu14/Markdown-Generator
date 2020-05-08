const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const api = require('./utils/api');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: 'github',
    message: 'Please type your github username:'
  },
  {
    type: 'input',
    name: 'title',
    message: 'Please type the name of your project:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project:'
  },
  {
    type: 'input',
    name: 'toC',
    message: 'Please describe your table of contents'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please type select the liscense you used for your project :',
    choices: ['MIT', 'Test', 'Test', 'Test']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'what you need to install this project:',
    defualt: 'npm i'
  },
  {
    type: 'input',
    name: 'usage',
    message:
      'If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.?:'
  },
  {
    type: 'input',
    name: 'contributing',
    message:'Let people know how they can contribute into your project. A contributing guideline will be a big plus.:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Describe and show how to run the tests with code examples:'
  }
];
function writefile(fileName, data ){
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
  }
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
console.log("search..");
    api
    .getUser(inquirerResponses.github)
    .then(({ data }) => {
      writefile("README.md", generateMarkdown({ ...inquirerResponses, ...data}));
    })
  })
}
init();