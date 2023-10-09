# SVG-logo-designer

## Table of Contents

 *  [Overview](#Overview)

 * [Description](#description)

 * [User-Story](#User-Story)

 * [Acceptance-Criteria](#Acceptance-Criteria)

 * [Usage-Instructions](#usage-Instructions)



# overview

## Description
To build a node.js command line application that takes in user input to generate a SVG logo and saves it as a "logo.svg" file!

## User Story 
as a freelance web designer I want to generate
a simple logo for my projects



## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered


## Usage Instructions
1. Open the cloned repository 
2. Open integrated terminal on index.js
3. Enter “node index.js” in the command line
4. Through sequential order within the command line interface - the user will be presented with npm inquirer questions - the user will provide a response to each question and proceed.
5. Once completed a SVG file named "logo.svg" will be created.


