#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const minimist = require('minimist');

const { jsTemplate, cssTemplate, indexTemplate } = require('./templates.js');

var argv = minimist(process.argv.slice(2)); // Parse command line arguments

// Get component name from command
let componentName = argv._[0];

// Cancel if no component name was entered
if (!componentName) {
  console.log('Please enter a name for your component. Example usage: breed MyComponent');
  process.exit(1);
}

// Force first char to be uppercase
componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

// Use --path argument if provided, otherwise component name
const pathName = argv.path || componentName;

// Create a dir for the component, or cancel if it already exists
var componentDir = path.resolve(pathName);
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir);
} else {
  console.log('Could not create component: a directory with that name already exists.');
  process.exit(1);
}

// Create component files
fs.writeFileSync(path.join(componentDir, `${pathName}.js`), jsTemplate(componentName, pathName));
fs.writeFileSync(path.join(componentDir, `${pathName}.scss`), cssTemplate(componentName));
fs.writeFileSync(path.join(componentDir, 'index.js'), indexTemplate(componentName, pathName));

console.log(`Component <${componentName} /> created successfully in /${pathName}`);
