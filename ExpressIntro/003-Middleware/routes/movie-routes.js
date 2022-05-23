const router = require('express').Router();

const printTime = (req, res, next) => {
    console.log(new Date());
    next();
};

router.get('/getAll', (req, res, next) => {
    res.send('All Movies have been retrieved');
    next();
});

//nested middleware passed in the name of our middelware
router.get("/time", printTime, (req, res) => {
    res.send("Time printed!")
});

router.get('/error', (req, res, next) => {
    //when we run this path create a new error
    throw new (Error('Big scary error!'));
});

module.exports = router;