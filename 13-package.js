// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>
// e.g. npm i bootstrap

// npm install (if project cloned from github)

// global dependency - use it in any project
// npm install -g <packageName>
// npm install -g nodemon

// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// npm i nodemon -D (devDependencies)
// In package.json, include:
// "scripts": { "start": "nodemon app.js" }, and type npm start on terminal so that terminal 
// will restarts automatically if changes is detected.

console.log("hello people")

// Uninstall with
// e.g. npm uninstall bootstrap
// or delete line from package.json

// The basic of package.json
// http://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/