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
        ]
    }
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
