var path = require('path')
    , fs = require('fs')
    , express = require('express')
    , flash = require('connect-flash')
    , passport = require('passport')
    , util = require('util')
    , http = require('http')
    , app = module.exports = express()
    , middleware = require('./middleware')
    , port = process.env.PORT || 9955;

require('./config')(app, express, middleware, flash);

app.get('/login', function (req, res) {
    res.render('login', { user: req.user, message: req.flash('error') });
});

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
    function (req, res) {
        res.redirect('/');
    });

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

http.createServer(app).listen(port, function () {
    console.log('Express server listening on http port %d in %s mode', port, app.settings.env);
});