const mongoose = require('mongoose');
require('dotenv').config();

const DB = 'mongodb+srv://' + process.env.DB_ID + ':' + process.env.DB_PW + '@cluster-memes.ps0ycgy.mongodb.net/?retryWrites=true&w=majority';

module.exports = async function database_connection() {

    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("\x1b[32m", `✔   1) Successful connection to MongoDB database    ✔ `);
    } catch (error) {
        console.log(error);
        throw "could not connect to MongoDB database"
    }
};