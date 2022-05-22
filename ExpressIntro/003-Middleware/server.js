const express = require("express");
const cors = require('cors');

const app = express();

//Middleware

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log("second piece of middleware");
});

app.get('/', (req, res) => {
    res.send("Thanks for wiewing this site")
})

const server = app.listen(5015, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});