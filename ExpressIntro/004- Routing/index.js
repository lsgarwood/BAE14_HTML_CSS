const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
    return res.send("Hello, my name is LG!");
});

app.post('/create', (req, res) => {
    return console.log('create');
});

app.get("/name/:name", (req, res) => {
    const name = re.params.name;
    console.log(name);
    res.status(202).send(`Hi ${name}, how are you?`)
});

const server = app.listen(5015, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});