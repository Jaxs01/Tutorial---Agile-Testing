Tutorial - Agile Testing
========================

The tutorial for Agile Testing course.

# Dependencies
- [nodejs](http://nodejs.org)
- [grunt](http://gruntjs.com)

# Quick Setup
- fork this repo
- `git clone <your-new-github-url>`
- `sudo npm install -g grunt-cli` *(if not already installed)*
- `npm install -d` Installs all server-side dependencies (node_modules).
- `grunt` Do the initial build so that tutorial is compiled in `build`.
- `grunt connect` Start the dev webserver on port 9001

  server listening on port 9001 in development mode

- Point your browser to `http://localhost:9001`

# Production mode
- `npm start` Starts the web server in production mode with authentication on localhost:9955 (guest:secret) - see `app/config/users.htpasswd` for details

# Other Commands
- `grunt` [ngdocs] Default runs all build tasks.
- `grunt connect` Start webserver on 9001.
- `grunt ngdocs` Kick off a production-ready build.
- `grunt watch` Watches for file changes and rebuild documentation set.
- `grunt clean` Cleans all build files.
- `grunt build` Runs all the build tasks and opens up a browser at localhost:9001
- `grunt open:dev` Opens a browser at the dev location
` `grunt open:prod` Opens a browser to the production location