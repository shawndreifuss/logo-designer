const fs = require('fs')
const inquirer = require('inquirer');
const { Triangle, Square, Circle} = require("./Develop/lib/shapes")

class Svg {
    constructor() {
        this.logoText = ''
        this.logoshape = ''
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    }

}










function promptUser() {
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Text: enter up to three character',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What color do you want the text?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: "What shape would you like the logo to be?",
      name: 'shape',
    },
    {
        type: "input",
        message:
          "Choose shapes color (Enter color keyword OR a hexadecimal number)",
        name: "shapeColor",
      },
  ])
  .then((response) => {
  if (response.text.length > 3) {
    console.log("Must enter a value of no more than 3 characters");
    return
  } else {
    // Calling write file function to generate SVG file
    fs.writeToFile("logo.svg", response);
  }
})
};
// calling function on start when application is ran 
promptUser()