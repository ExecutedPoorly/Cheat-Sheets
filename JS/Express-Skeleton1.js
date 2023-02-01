npm install express-generator -g //globally install

// To create an Express app named "helloworld" with the default settings, navigate to where you want to create it and run the app as shown:
express helloworld
Copy to Clipboard

// Note: You can also specify the template library to use and a number of other settings. Use the help command to see all the options:
express --help

// Note: If you're using NodeJS version > 8.2.0 or latest, you can skip the installation and run express-generator with npx:
npx express-generator helloworld
// This has the same effect as installing and then running express but does not install the package on your system. However, 
// this means you cannot call express from anywhere.

// npm will create the new Express app in a sub folder of your current location, displaying build progress on the console.
// On completion, the tool will display the commands you need to enter to install the Node dependencies and start the app.

// Note: The new app will have a package.json file in its root directory. You can open this to see what dependencies are installed, 
//   including Express and the template library Jade:

{
  "name": "helloworld",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.16.0",
    "http-errors": "~1.6.2",
    "jade": "~1.11.0",
    "morgan": "~1.9.0"
  }
}
// Install all the dependencies for the helloworld app using npm as shown:

cd helloworld
npm install
