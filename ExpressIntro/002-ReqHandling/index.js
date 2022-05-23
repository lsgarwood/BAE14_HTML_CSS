const express = require("express");

const app = express();

app.use(express.json());

app.get("/helloworld", () => { 
    console.log("Hello, World!"); 
});

app.get("/hello", (req, res) => {
    res.send("Hello, my name is LG!");
});

app.get('/read', (req, res) => { 
    console.log('fetch');
});

app.post('/create', (req, res) => {
    console.log('create');
});

app.put('/replace', (req, res) => {
    console.log('replace');
});

app.patch('/update', (req, res) => {
    console.log('update');
});

app.delete('/delete', (req, res) => {
    console.log('delete');
});

//Query params

app.get("/getSuperVillains", (req) => {
    console.log(req.query);
});

app.get('/getSuperHeroes/:id', (req) => {
    // console.log(req);
    // console.log(req.params);
    res.status(200).send(`Your superhero name with id ${req.params.id} was seen`)
});

//URL Params

app.get("/getSuperHeroesName/:name", (req) => {
    console.log(req);
    console.log(req.params)
});

app.get("/name/:name", (req, res) => {
    const name = req.params.name;
    console.log(name);
    res.status(202).send(`Hi ${name}, how are you?`)
});

app.delete('/deleteSuperHeroes', (req, res) => {
    console.log("working");
    res.status(202).send("Your superhero was deleted");
});

//queries
app.get('/getThis', (req) => {
    console.log("This is working");
    console.log(req.query);
})

//Body request

app.post("/newSuperPerson", (req) => {
    const body = req.body;
    console.log(body);
    console.log(req.params.id);
});

app.get('/error', (req, res) => {
    res.status(502).send("Why are you here?")
});

//Exercise 
//Delete 
app.delete("/deleteEx/:id", (req, res) => {
    console.log(req.params.id);
    res.status(200).send("Your item has been deleted");
});
//READ 
app.get('/getEx', (req, res) => {
    let query = JSON.stringify(req.query);
    console.log(JSON.stringify(req.query));
    console.log(typeof(query));
    res.status(200).send("okey dokey");
});

//Create 
app.post("/createNewEx", (req, res) => {
    const body = req.body;
    let name = body.name;
    
    console.log(body.name);
    console.log(typeof(body));
    res.status(201).send("Your new item was created");
})

//put/patch - Update 
app.patch("/patchEx/:id", (req, res) => {
    console.log(req.params.id);
    // print a body
    res.status(202).send("Item patched");
});
// When testing this out plz go onto Postman and
// set the Request.

const server = app.listen(5015, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});