const express = require("express"); //tells the file to use express so we can have express features available in the variable
const cors = require("cors"); //allows us to do cross-origin-resource-sharing so that this api can send and receive data to external sources
const mongoose = require('mongoose');
const app = express(); //create a variable call app that is going to be an instance of an express server. We have express features available in the variable "app"
const port = 8000;


app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));


// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

// This is where we import the routes function
const AllMyPetRoutes = require("./server/routes/pet.routes");
AllMyPetRoutes(app);


app.listen(8000, () => console.log("The server is all fired up on port 8000"));