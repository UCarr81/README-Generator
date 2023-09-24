// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdowns')

// TODO: Create an array of questions for user input


// Questions that will be asked = Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {   
        type: 'confirm',
        message: 'Would you like to include a license badge?',
        name: 'includeLicense',
        default: true

    },
    {
        type: 'list',
        message: 'Select a License',
        name: 'license',
        choices: [
            { name: 'Apache', value: 'apache'},
            { name: 'Boost', value: 'Boost'},
            { name: 'MIT', value: 'MIT'},
            { name: 'Mozilla', value: 'Mozilla'},
            {name: 'IBM', value: 'IBM'},
            {name: 'Unlicense', value: 'Unlicense'}
        ],
        when: (answers) => answers.includeLicense,
    },
    {
        type: 'input',
        message: 'Provide a short description about your project \n-What was your motivation? \n-Why did you build this project? \n-What problems does this solve? \n-What did you learn?',
        name: 'description'

    },
    {
        type: 'input',
        message: 'What steps are requied to install your project? Provide step by step process.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions for use',
        name: 'usage'
    }, 
    {
        type: 'confirm',
        message: 'Would you like to include Credits',
        name: 'includeCredits',
        default: true,

        
    },
    {
        type: 'input',
        message: 'List your collaborators if any, with links to their github \nIf you followed any tutorials links those here aswell.',
        name: 'credits',
        when: (answers) => answers.includeCredits,
    },
    {
        type: 'confirm',
        message: 'Would you like to include "Tests" in your ReadMe?',
        name: 'includeTest',

    },
    {
        type: 'input',
        message: 'Provide testing instructions if any',
        name: 'test',
        when: (answers) => answers.includeTest,
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);

    }

// TODO: Create a function to initialize app

function init() {

    inquirer.prompt(questions).then((response) => {
        const readmeFile = generateMarkdown(response);
        writeToFile('README.md', readmeFile);
        console.log('README.md File Generated');
    });
}

// Function call to initialize app
init();
