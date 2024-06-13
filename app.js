const express = require('express');// ejs stands for embedded javascript 
const expressLayouts = require('express-ejs-layouts');// this helps in creating a standard layout that can be used in multiple webpages
const fileUpload = require('express-fileupload');// middle ware for file uploading 
const session = require('express-session');// middle ware to handle sessions 
// session is the time spent by a user in the website and the data corresponding to it 
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');// stores error and messages sent by the server and does not delete thme even on moving from one url to another
require('dotenv').config();
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));// parses data and sends it as a request or response , when needed it is unparsed 
// unless you set url encoded to true you cannot use the req.body in request handlers 
app.use(express.static('public'));
app.use(expressLayouts);// enables app to use expressLayouts 
app.set('layout','./layouts/main');// sets the primary layout file as main.js 
app.use(cookieParser('cookingBlogSecure'));
app.use(session({
    secret:'CookingBlogSecretSession',// used to hash the cookie data of that session (a session that has been created but not yet modified)
    saveUninitialized: true,// it saves uninitialized sessions 
    resave : true // resave is a property that will allow your server to save a session's data even if there are no modifications to it 
}));
app.use(flash());// use flash in app
app.use(fileUpload());// use fileUpload in app 
app.set('view engine','ejs');// allows you to render ejs files 
const routes = require('./server/routes/recipeRoutes.js');
app.use('/',routes);// for the root page, or landing page, it uses the routes from the routes imported  
// the website has subroutes as well , for which it handles it from the same file, for all routing from the root page it accesses the routes module imported  
app.listen(port,()=>console.log(`Listening to port ${port}`));


/*
username sjabezsam 
pass 2r8FfhXTdzGnh7X5


mongodb+srv://sjabezsam:2r8FfhXTdzGnh7X5@cluster0.eqml8aj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
 */