// TODO: Include packages needed for this application
var fs = require('fs');
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What should the title be?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What should the description say?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What information should be displayed in the usage section?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What information should be displayed in the installation section?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What people or resources contributed in the creation of this project?',
            name: 'contributions',
        },
        {
            type: 'list',
            message: 'What license is the project protected under? (leave blank for no license)',
            choices: ['MIT', 'GNU', 'Apache'],
            name: 'license',
        },
        
    ])
    .then((answers) => {
        console.log('creating file. . .');
        const markdown = generateMarkdown(answers);
        console.log(markdown);
        fs.writeFile('README.md', markdown, (err) => {
            if (err) {
              console.log('UH OH! There was an error creating the file!\n');
              console.log('Error: ' + err);
            } else {
              console.log('The file was created successfully!');
            };
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
// Function call to initialize app
init();

//README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions