const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path')
const app = express();


// SETTINGS
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, '/views'))
app.engine('.hbs', exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

// MIDDLEWARES

// ROUTES
app.use(require('./routes/index.routes'))

// STATICS FILES

module.exports = app;