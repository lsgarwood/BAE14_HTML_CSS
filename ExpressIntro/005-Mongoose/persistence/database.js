//write some functions to connect to our database (MongoDB)
// tell our app to manually connect with our functions

//create a schema for our object 'movie' to push it into our MongoDB

//install dependencies
//npm i express cors mongoose

const mongoose = require('mongoose');
// mongoose is an unoffical 

//MongoDB connection string
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true}, (err) => {
    if(err){
        console.log("Error!");
    } else {
        console.log("No error!");
    }
});

module.exports = mongoose;