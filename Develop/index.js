// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateReadme = require('./utils/generateMarkdowns')

// TODO: Create an array of questions for user input


// Questions that will be asked = Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    }
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);

    }

// TODO: Create a function to initialize app

function init() {

    inquirer.prompt(questions).then((response) => {
        const readmeFile = generateReadme(response);
        writeToFile('README.md', readmeFile);
        console.log('README.md File Generated');
    })
}

// Function call to initialize app

init();
