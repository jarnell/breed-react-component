#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

const { jsTemplate, cssTemplate, indexTemplate } = require('./templates.js');

// Get component name from command
let componentName = process.argv[2];

// Cancel if no component name was entered
if (!componentName) {
  console.log('Please enter a name for your component. Example usage: breed MyComponent');
  process.exit(1);
}

// Force first char to be uppercase
componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

// Create a dir for the component, or cancel if it already exists
var componentDir = path.resolve(componentName);
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir);
} else {
  console.log('Could not create component: a directory with that name already exists.');
  process.exit(1);
}

// Create component files
fs.writeFileSync(path.join(componentDir, `${componentName}.js`), jsTemplate(componentName));
fs.writeFileSync(path.join(componentDir, `${componentName}.scss`), cssTemplate(componentName));
fs.writeFileSync(path.join(componentDir, 'index.js'), indexTemplate(componentName));

console.log(`Component <${componentName} /> created successfully in /${componentName}`);
