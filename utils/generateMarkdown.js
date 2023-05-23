//This sets up the link for the license badge that displays at the top of the README
function renderLicenseBadge(license) {
  const badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    None: ''
  }
  return badges[license];
}

//This stores the links for the three different license choices
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
    GNU: '[GNUv3](https://choosealicense.com/licenses/gpl-3.0/',
    Apache: '[Apache2.0](https://choosealicense.com/licenses/apache-2.0/)',
    None: ''
  }
  return licenseLinks[license];
}

//This inserts the license paragraph into the generated README file
function renderLicenseSection(license) {
  if(license){
    return `This project is licensed under the ${renderLicenseLink(license)} license.`
  } else {
    return ''
  }
}

//This function generates the README file based on the input that's passed in by the user
function genMarkdown(answers) {
  return `
# ${answers.title}
${renderLicenseBadge(answers.license)}

## Table of Contents
- [Description.](#description)
- [Usage Tips.](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

<a name='description'></a>
## Product Description
${answers.description}

<a name='usage'></a>
## Usage
${answers.usage}

<a name='installation'></a>
## Installation
${answers.installation}

<a name='contributing'></a>
## Contributing
${answers.contributions}

<a name='license'></a>
## License
${renderLicenseSection(answers.license)}
`;
}

module.exports = genMarkdown;