function projectURL(github, title){
  const actualTitle = title.toLowerCase().split().join("-");
return `https://github.com/${github}/${actualTitle}`;

}
function licenseBadge(license, github, title){
  if (license !== 'None'){
    return `[![GITHUB license](https//img.shields.io)/badge/license-${license}-blue.svg)](${projectURL(github, title)})`
  }
  return ``
}

function licenseSection(license) {
if (license !== 'None') {
  return (
    `##License
    This project is licensed under ${license} license`
  )
}
 return ``
}


function generateMarkdown(data) {
  return `
# ${data.title}
${licenseBadge(data.license, data.github, data.title)}

##Description
${data.description}
##Table of Contents
${data.toC}

${licenseSection(data.license)}
##Usage
${data.usage}
##Installation
${data.installation}
##Contributing
${data.toC}
##Tests
${data.tests}

<img src="${data.avatar_url}">
`
}

module.exports = generateMarkdown;
