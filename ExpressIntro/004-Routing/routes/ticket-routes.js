// this method will only have methods/routes for the movies

//importing the router object from our express framework
const router = require('express').Router();

router.get('/getAll', (req, res) => {
    res.send('All tickets have been retrieved');
});

//export this file as a module, so server can use it
module.exports = router;