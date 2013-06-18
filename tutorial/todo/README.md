# TODO Tutorial Application for learning Agile Testing

## Overview

This application is from the [todo mvc][todomvc] series of applications. This application has been choosen because while the domain of tasks is simple it can help demonstrate key ideas for testing. It also came with enough tests. Each commit is a separate lesson teaching a single aspect of agile testing.


## Prerequisites

### Git
- A good place to learn about setting up git is [here][git-github]
- Git [home][git-home] (download, documentation)

### Node.js
- Generic [installation instructions][node-generic].
- Mac DMG [here][node-mac]
- Windows download from [here][node-windows]. (You will also need [7 Zip] to unzip the node archive)
  (and don't forget to add `node.exe` to  your executable path)

## Workings of the application

- Read the Development section at the end to familiarize yourself with running and developing
  an angular application.

## Commits / Tutorial Outline

You can check out any point of the tutorial using
    git checkout step-?

To see the changes which between any two lessons use the git diff command.
    git diff step-?..step-?

### step-0

- Initial [todo-angular] project layout


### step-1

- d


### step-2

## Setting up the environment

- `sudo npm install -g grunt-cli grunt-init` *(if not already installed)*
- `npm install -d` Installs all server-side dependencies (node_modules).

## Running the code samples

The following docs apply to all angular-seed projects and since the phonecat tutorial is a project
based on angular-seed, the instructions apply to it as well.


To run the test suite, run these commands:

    npm test

To see other commands: `grunt -h`

````text
Available tasks
       connect  Start a connect web server. *
         karma  run karma. *
       default  Alias for "test" task.
          test  Alias for "unit", "coverage", "acceptance" tasks.
    acceptance  Alias for "connect", "karma:e2e" tasks.
          unit  Alias for "karma:unit" task.
      coverage  Alias for "karma:coverage" task.
        server  Alias for "connect:server:keepalive" task.
````


### Running the app during development

1. `grunt connect`
2. navigate your browser to `http://localhost:9999/` to see the app running in your
   browser.

### Running unit tests

We recommend using [jasmine](http://pivotal.github.com/jasmine/) and
[Karma](http://karma-runner.github.io) for your unit tests/specs, but you are free
to use whatever works for you.

Requires [node.js](http://nodejs.org/), Karma (`sudo npm install -g karma`) and a local
or remote browser.

* `grunt unit`
  * a browser will start and connect to the Karma server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the `config/karma.conf.js` file)
* to run or re-run tests just change any of your source or test javascript files


### End to end testing

Angular ships with a baked-in end-to-end test runner that understands angular, your app and allows
you to write your tests with jasmine-like BDD syntax.

Requires a webserver, node.js + `grunt acceptance` or your backend server that hosts the angular static files.

Check out the
[end-to-end runner's documentation](http://docs.angularjs.org/guide/dev_guide.e2e-testing) for more
info.

* create your end-to-end tests in `test/e2e/scenario.js`
* serve your project directory with your http/backend server or node.js + `grunt server`
* to run do one of:
  * open `http://localhost:port/test/e2e/runner.html` in your browser
  * run the tests from console with [Karma](http://karma-runner.github.io) via
    `scripts/e2e-test.sh` or `script/e2e-test.bat`


## Application Directory Layout

    index.html        --> app layout file (the main html template file of the app)
    js/               --> javascript files
      app.js          --> application
      controllers/    --> application controllers
      directives/     --> application directives
      filters/        --> custom angular filters
      services/       --> custom angular services
    lib/              --> angular and 3rd party javascript libraries
    config/
      unit.conf.js      --> config file for running unit tests with Karma
      e2e.conf.js       --> config file for running e2e tests with Karma
      unit-cov.conf.js  --> config file for running unit tests with Karma with code coverage
      e2e-cov.conf.js   --> config file for running e2e tests with Karma with code coverage

    test/               --> test source files and libraries
      e2e/              -->
        scenarios.js    --> end-to-end specs
      unit/             --> unit level specs/tests

## Contact

For more information on AngularJS please check out http://angularjs.org/

[todo-angular]: https://github.com/tastejs/todomvc/tree/gh-pages/architecture-examples/angularjs
[todomvc]: http://todomvc.com/
[7 Zip]: http://www.7-zip.org/
[git-home]: http://git-scm.com
[git-github]: http://help.github.com/set-up-git-redirect
[node-mac]: http://code.google.com/p/rudix/downloads/detail?name=node-0.4.0-0.dmg&can=2&q=
[node-windows]: http://node-js.prcn.co.cc/
[node-generic]: https://github.com/joyent/node/wiki/Installation
[java]: http://www.java.com