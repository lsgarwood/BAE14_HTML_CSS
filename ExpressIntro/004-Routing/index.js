//create all varaibles at the top
const express = require("express");
const cors = require('cors');
const app = express();
const movieRoutes = require('./routes/movie-routes.js');
const ticketRoutes = require('./routes/ticket-routes.js')

//use my varaibles

app.use(cors());

//add a base path so it knows which getAll to use
app.use('/movie', movieRoutes);
app.use('/ticket', ticketRoutes);

const server = app.listen(5015, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});