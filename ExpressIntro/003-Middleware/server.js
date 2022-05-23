const express = require("express");
const cors = require('cors');

const app = express();
const movieRoutes = require('./routes/movie-routes.js');

//Middleware

app.use(express.json());
app.use(cors());
app.use('/movie', movieRoutes);

app.use((req, res, next) => {
    console.log("middleware fired!");
    next();
});

app.use((req, res, next) => {
    console.log("more middleware fired!");
    next();
});

app.get('/', (req, res) => {
    res.send("Thanks for wiewing this site")
});

//error handling middleware
//when an error comes in, print the error and print out then call next
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log("post error");
    next();
});

const server = app.listen(5015, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});