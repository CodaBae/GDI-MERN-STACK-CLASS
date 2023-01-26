const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>",
    { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(() => {
        console.log("Couldn't connect to MongoDB");
    })


app.use(express.json())


app.listen(8800, () => {
    console.log("Backend server is running!")
})