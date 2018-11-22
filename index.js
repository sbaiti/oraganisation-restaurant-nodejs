const express = require("express");
const app = express();
const port = process.env.node || 4000;
const bodyParser = require("body-parser");

require("./PDF/Pdf");

//module  connect to MongoDb 
require("./MongoConnect");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

Reservation = require("./route/reservation");
//Router
app.use("/Reservations/api", Reservation);

app.listen(port, () => console.log("server listening on " + port));