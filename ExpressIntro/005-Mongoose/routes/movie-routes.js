// this method will only have methods/routes for the movies

//importing the router object from our express framework
const router = require('express').Router();

// .. lifts you up a folder
const movie = require('../persistence/movie.js');

router.get('/getAll', (req, res, next) => {
    movie.find((error, movies) => {
        res.status(200).send(movies);
    });
});

router.get('/getId/:id',  (req, res, next) => {
    const id = req.params.id;
    movie.findById(id, (error, movie) => {
        res.status(200).send(movie);
    });
});

router.get('/getRating/:rating', (req, res, next) => {
    const rating = req.params.rating;
    movie.findOne({'rating' : rating}, (error, movie) => {
        res.status(200).send(movie);
    });
});

router.get("/title/:title", (req, res, next) => {
    const title = req.params.title;
    console.log(`The movie titled: ${title}, has been found`);
    movie.find({'title' : title}, (error, movie) => {
        res.status(200).send(movie);
    });
});

router.post('/create', (req, res, next) => {
    console.log(req.body);
    //make a variable that is equal to the req.body
    const record = req.body;
    // make a new movie out of record
    const movieObj = new movie(record);
    // usimg inbuilt functions, add this movie to our database
    //once out .save() has run, whatever it returns, pass back into our .then()
    movieObj.save().then((result) => { //call data .save() return result and do following
        res.status(201).send(`${result.title} has been added to the database`);
    }).catch((error) => {
        next(error); //if any errors pass them onto the error handling middleware
    });
});

router.post('/createMany', (req, res, next) => {
    const data = req.body;

    data.forEach((movieData) => {
        const movieObj = new movie(movieData);
        movieObj.save().then((result) => { 
            console.log(`${result.title} has been added to the database`);
        }).catch((error) => {
            next(error); 
        });
    });
    res.status(201).send('All data has been added to the database');
});

router.put('/updateId/:id', (req, res, next) => {
    const data = req.body;
    const id = req.params.id;
    movie.findByIdAndUpdate(id, data, (error, movie) => {
        res.status(202).send('movie updated!');
    });
});

router.delete('/deleteId/:id', (req, res, next) => {
    movie.findByIdAndDelete(req.params.id, (error) => {
        res.status(202).send("movie deleted");
    });
});

//export this file as a module, so server can use it
module.exports = router;

// Stretch goal - Add custom queries (findByvalue, DeleteMultipleDocuments, updateAll) 