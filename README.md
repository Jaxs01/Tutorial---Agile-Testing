Tutorial - Agile Testing
========================

The tutorial for Agile Testing course.

# Dependencies
- [nodejs](http://nodejs.org)
- [grunt](http://gruntjs.com)

# Quick Setup
- fork this repo
- `git clone <your-new-github-url>`
- `sudo npm install -g grunt-cli grunt-init` *(if not already installed)*
- `npm install -d` Installs all server-side dependencies (node_modules).
- `grunt` Do the initial build so that tutorial is compiled in `build`.
- `npm start` Starts the web server (alternatively `grunt connect`)

  server listening on port 9001 in development mode

- Point your browser to `http://localhost:9001`

# Other Commands
- `grunt` [ngdocs] Default runs all build tasks.
- `grunt connect` Start webserver on 9001.
- `grunt ngdocs` Kick off a production-ready build.
- `grunt watch` Watches for file changes and rebuild documentation set.