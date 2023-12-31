// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license){

    case 'Apache':
      return '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;

    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;

    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;

    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;

    case 'IBM':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      break;

    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
switch(license){

  case 'Apache':
    return '[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)';
    break;

  case 'Boost':
    return '[https://www.boost.org/LICENSE_1_0.txt](https://www.boost.org/LICENSE_1_0.txt)';
    break;

  case 'MIT':
    return '[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)';
    break;

  case 'Mozilla':
    return '[https://opensource.org/licenses/MPL-2.0](https://opensource.org/licenses/MPL-2.0)';
    break;

  case 'IBM':
    return '[https://opensource.org/licenses/IPL-1.0](https://opensource.org/licenses/IPL-1.0)';
    break;

  case 'Unlicense':
    return '[http://unlicense.org/](http://unlicense.org/)';
    break;
    default:
      break;
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let stringLicenseSection = '';

  switch(license){
    case 'Apache':
      stringLicenseSection += '## Apache\n' + '### Apache 2.0 License';
      break;
      case 'Boost':
      stringLicenseSection += '## Boost\n' + '### Boost Software License 1.0';
      break;
      case 'MIT':
      stringLicenseSection += '## MIT\n' + '### The MIT License';
      break;
      case 'Mozilla':
      stringLicenseSection += '## Mozilla\n' + '### Mozilla Public License 2.0';
      break;
      case 'IBM':
      stringLicenseSection += '## IBM\n' + '### Mozilla Public License 2.0';
      break;
      case 'Unlicense':
      stringLicenseSection += '## Unlicense\n' + '### The Unlicense';
      break;
    default:
      break;
  }

  return stringLicenseSection;

  stringLicenseSection += renderLicenseSection(license);
  return stringLicenseSection;
}

function githubUsername(userName){
  if (userName != ''){
    return 'https://github.com'+userName;
  }else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  /* Currently Using https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
  as a guide to create a Professional README.md File  */
  let markdown = `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Live Preview


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)`;

  if (data.credits) {
    markdown += `
- [Credits](#credits)`;
  }

  if (data.test) {
    markdown += `
- [Tests](#tests)`;
  }

  markdown += `
- [License](#license)`;

  if (data.installation) { 
    markdown += `
## Installation
Before using this application, you'll need to install the necessary dependencies. To do this, follow these steps: 
${data.installation}
`;
  }

  markdown += `
## Usage
${data.usage}`;

  if (data.credits) {
    markdown += `
## Credits 
${data.credits}`;
  }

  if (data.test) {
    markdown += `
## Tests
${data.test}`;
  }

  markdown += `
## License 
### This project is licensed under the terms of the 
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
If you would like to contribute to this project, please follow the guidelines outlined in the Contributing Guide.

## Questions
If you have questions or need further assistance with this project, please feel free to contact me via:
- E-Mail: ${data.email}
- GitHub: [${data.userName}](https://github.com/${data.userName})`;

  return markdown;
}

module.exports = generateMarkdown;
