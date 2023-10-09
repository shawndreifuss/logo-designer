const fs = require('fs')
const inquirer = require('inquirer');
//imported classes
const { Triangle, Square, Circle} = require("./Develop/lib/shapes")


//write to file with logo of users choices
function writeToFile (file, response) {
    let svgFile = "";

    svgFile = 
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
 
  // Takes user input for shape choice and inserts it into SVG file
  svgFile += `${response.shape}`;
// if statement to set it as traingle circle or square 
  let shapeChoice;
  if (response.shape === 'triangle') {
    shapeChoice = new Triangle();
    svgFile += `<polygon points="150, 18 244, 182 56, 182" fill="${response.shapeColor}"/>`;
  }else if (response.shape === 'square') {
    shapeChoice = new Square();
    svgFile += `<rect x="73" y="40" width="160" height="160" fill="${response.shapeColor}"/>`;
 } else {
    shapeChoice = new Circle();
    svgFile += `<circle cx="150" cy="115" r="80" fill="${response.shapeColor}"/>`;
 }

// adding text into svg file 
 svgFile +=`<text x="150" y="130" text-anchor="middle" font-size="40" fill="${response.textColor}">${response.text}</text>`;
 // Closing </svg> tag
 svgFile += "</svg>";

 //writing all information of logo to svg file 

 fs.writeFile(file, svgFile, (err) => {
    err ? console.log(err) : console.log("logo generated")
})
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
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
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
    writeToFile("logo.svg", response);
  }
})
};
// calling function on start when application is ran 
promptUser()