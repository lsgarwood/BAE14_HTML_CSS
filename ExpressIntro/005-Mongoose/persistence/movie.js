// creating our schema for our movie object
const mongoose = require('mongoose');

//destructuring pulling variables /functions out of another object
//create new variables called schema and model
const {Schema, model} = mongoose;

// schema looks like a JSON, key value pairs
//value is the type of data (number = int, float, long, double, byte)
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 3
    },
    releaseYear: Number,
    ratings: [{
        rating: Number,
        ageRating: String,
        review: String
    }],
});

//make a model of our movie using the schema
//takes in the name of your schema(create a colletion) AND the schema itself
const movie = model('movie', movieSchema);

module.exports = movie;