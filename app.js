const express = require('express')
const routes = require('./routes/index');
const mongoose = require('mongoose')
const app = express();
const port = 3000

app.use('/', routes);

const uri = "mongodb+srv://tousif:tousifulla@t-cluster.7yoyhjy.mongodb.net/?retryWrites=true&w=majority"

  async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch(error) {
        console.error(error);
    }
}

connect();

app.listen(port, () => {
    console.log('App Server Started on port 3000 ')
});


module.exports = app;