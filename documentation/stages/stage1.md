# Initialize project (stage1.md)

## Create directory and npm init

    md vrls-demo
	cd vrls-demo
	npm init

---

	  "name": "vrls-demo",
	  "version": "1.0.0",
	  "description": "Basic Login SPA with Meteor and React",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "author": "Mark Robbins",
	  "license": "ISC"

---

### Manually Add DevDependencies to package.json

	"devDependencies": {
	  "gulp": "^3.9.0",
	  "gulp-change": "^1.0.0"
	}

These will be required for Code Coverage Reporter in Jasmine (Best to install these globally)

### Other npm globals

	babel-eslint@4.1.6
	chimp@0.24.1
	cucumber@0.9.2
	eslint@1.10.3
	eslint-plugin-react@3.13.1
	growl@1.8.1
	grunt-cli@0.1.13
	jasmine-core@2.4.1
	jasmine-node@1.14.5
	jshint@2.8.0
	karma@0.13.19
	karma-chrome-launcher@0.2.2
	karma-cli@0.1.2
	karma-coverage@0.5.3
	karma-dhtml-reporter@0.2.5
	karma-firefox-launcher@0.1.7
	karma-growl-reporter@0.1.1
	karma-growler-reporter@0.0.1
	karma-htmlfile-reporter@0.2.2
	karma-jasmine@0.3.6
	karma-requirejs@0.2.3
	karma-verbose-summary-reporter@0.0.1
	mongodb@2.1.4
	mongodb-rest@0.10.14
	mup@0.11.3
	phantomjs@1.9.19
	reload@0.7.0


## Git Init

	git init

## Insert Control Files

	.eslintrc
	.gitignore
	.jshintrc

## Insert README.md

	README.md

## SlickEdit Project

SlickEdit is my long loved customary speedy editor. This is optional.

	vrls-demo.vpj
	vrls-demo.vpw

## Do First Checkin

## Meteor Create App

	meteor create app

This will put the application in `app`, a subfolder of the project.

## Do Second Checkin


## Pull in pre-built Test Framework

Everything under the `output` folder. There is only a small number of branches here that are written to, so do not obliterate this folder.

### Static (fixed) Items

	output\testing
	output\testing\jasmine
	output\testing\jasmine\runner.html
	output\testing\jasmine\tools\**\*
	output\testing\karma
	output\testing\_frames.html
	output\testing\_iframes.html

### Dynamic (output) Items

	output\testing\karma\coverage\**\*
	output\testing\karma\DHTML\report.html

## Do Third Checkin
