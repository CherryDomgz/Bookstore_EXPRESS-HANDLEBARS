/*NOT NEEDED
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
*/

// Create the instances of the objects
var express = require('express');
var app = express();
var path = require('path');
const exphbs = require('express-handlebars');

//Router
const homeRouter = require ('./routes/home');
const bookCatalogRouter = require ('./routes/bookCatalog');
const informationRouter = require ('./routes/information');
const loginRouter = require ('./routes/login');
const registrationRouter = require ('./routes/registration');


// set the Handlebars as the default format with the use of hbs
app.engine('hbs', exphbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
// all the .hbs files will use Express Handlebars
app.set('view engine', 'hbs');
//view
app.set ('views', __dirname + '/views');

/* NOT NEEDED
//Setting up Mongo DB Atlas
const mongoose = require ('mongoose');
mongoose.connect (process.env.DATABASE_URL, {
    useNewUrlParser: true });
const db = mongoose.connection;
db.on ('error', error => console.error (error))
db.once ('open', () => console.log ('Connected to Mongo DB Atlas'))
*/

//port to incoming HTTP requests
const httpPort = process.env.PORT || 8080;
function isServerListening() {
    console.log("Server is running " + httpPort )
}


// static files 
app.use(express.static("public"));


//Router
app.use ('/', homeRouter);
app.use ('/', bookCatalogRouter);
app.use ('/', informationRouter);
app.use ('/', loginRouter);
app.use ('/', registrationRouter);


// The server is listenning to port 8080 
app.listen(httpPort, isServerListening);