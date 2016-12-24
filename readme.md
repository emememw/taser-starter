Taser-Starter
===================================

Taser-Starter can be used to initially setup a Taser-Project. It provides everything you'll need to get started:

* Project structure setup
* Webpack & Babel Configuration
* Mandatory Dependencies
* NPM run scripts

### Installation (Setup new Project)

Create your project directory
> mkdir my-taser-project


Initialize NPM
> npm init

Install Taser-Starter dependency
> npm install --save taser-starter

Run the installer
> node node_modules/taser-starter/installer.js

Start the dev-Server ( navigate your browser to http://localhost:8080 )
> npm run dev

### Update existing Project Configuration

Just run the installer again
> node node_modules/taser-starter/installer.js

### Usage (NPM run scripts)

Start the dev-Server ( navigate your browser to http://localhost:8080 )
> npm run dev

Build project for deployment
> npm run build
