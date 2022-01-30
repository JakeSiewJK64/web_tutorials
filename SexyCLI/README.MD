# SexyCLI

### Step 1: Include #! shebang
Like this:
`#!/usr/bin/env node`
Shebang is included when writing a command line script for 3rd party to use.

### Step 2: Change the package type to module so we are using the ESM method to import packages
1. go to `package.json`
2. add `"type":"module",`  

*Note*: NODE.JS supports top level function calls like calling await outside an async function. 

NPM packages explained:
-  [Inquirer](https://www.npmjs.com/package/inquirer) = to collect user input from many types like list items and text input.
-  [chalk ](https://www.npmjs.com/package/chalk) = to print colored text to console
-  [animation](https://www.npmjs.com/package/animation) = to print animated text to console
-  [createSpinner](https://www.npmjs.com/package/nanospinner) = to display loading spinner to console
-  [figlet](https://www.npmjs.com/package/figlet) = to print banner text to console
-  [gradient](https://www.npmjs.com/package/gradient-string) = to print gradient text to console

Tutorial Video Source: https://youtu.be/_oHByo8tiEY