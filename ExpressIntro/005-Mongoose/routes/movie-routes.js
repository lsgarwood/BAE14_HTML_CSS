// this method will only have methods/routes for the movies

//importing the router object from our express framework
const router = require('express').Router();

router.get('/getAll', (req, res) => {
    res.send('All Movies have been retrieved');
});

router.get('/get',  (req, res) => {
    res.send('The movie has been found');
});

router.post('/create', (req, res) => {
    res.send('Your movie was created');
});

router.put('/update', (req, res) => {
    res.send('Your movie has been updated');
});

router.delete('/delete', (req, res) => {
    res.send("Your movie has been deleted!");
});

//URL params
router.get("/name/:name", (req, res) => {
    const name = req.params.name;
    console.log(name);
    res.status(202).send(`The movie titled: ${name}, has been found`)
});

//Body request
router.post("/newMovie", (req) => {
    const body = req.body;
    console.log(body);
    console.log(req.params.id);
});

//export this file as a module, so server can use it
module.exports = router;