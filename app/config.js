var path = require('path');

module.exports = function (app, express, middleware, flash) {
    'use strict';

    app.configure(function () {
        var passport = middleware.auth.passport;
        app.disable('x-powered-by');
        app.set('views', __dirname + '/views');
        app.set('view engine', 'ejs');
        app.use(express.logger());
        app.use(express.cookieParser());
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.session({ secret: 'keyboard cat' }));
        // Initialize Passport!  Also use passport.session() middleware, to support
        // persistent login sessions (recommended).
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(app.router);
        app.use(middleware.auth.ensureAuthenticated);
        app.use(express.static(path.join(__dirname, 'public')));
        app.use("/", express.static(path.join(__dirname, 'public', 'index.html')));

    });

    app.configure('test', function () {
        app.use(express.logger());
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    app.configure('development', function () {
        app.use(express.logger());
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    app.configure('production', function () {
        app.use(express.errorHandler());
    });
};