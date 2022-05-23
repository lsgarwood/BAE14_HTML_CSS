//create all varaibles at the top
const express = require("express");
const cors = require('cors');
const app = express();
const movieRoutes = require('./routes/movie-routes.js');
const mongoose = require('./persistence/database.js');
const { json } = require('express');

//use my varaibles
app.use(cors());
app.use(express.json()); //converting our json into a javascript obj for us to use

//add a base path so it knows which getAll to use
app.use('/movie', movieRoutes);


const server = app.listen(5015, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});