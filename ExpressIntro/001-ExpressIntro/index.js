const express = require("express");

const app = express();

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

//Body Request

app.post("/newSuperPerson", (req) => {
    const body = req.body;
    console.log(req.params.id);
});

app.delete("/delete/:id", (req) => {
    console.log(req.params.id);
});

const server = app.listen(5015, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});