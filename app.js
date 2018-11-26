var express = require('express');
var app = express();
var port = process.env.PORT || 3001;
var mongoose = require('mongoose');
var path=require('path');
var config = require('./config');
var appController = require('./controllers/apiController');
//var setupContrller = require('./controllers/setupController');


app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


//connection 
mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true })
    .then(() => console.log('mongoDB connected ! '))
    .catch((err) => console.log('error in connection ' + err));

// allow all requests
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});



//service
//setupContrller(app);
appController(app);
app.use(express.static('proj/build'));

 // Express serve up index.html file if it doesn't recognize route
 app.get('*', (req, res) => {
   console.log(__dirname)
   res.sendFile(path.resolve(__dirname + '/proj/build/index.html'))
 });
app.listen(port, () => console.log(`server runnig at ${port}`));