const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

//const DATABASE_URL = "mongodb://localhost:27017/fakeshop";
mongoose.connect("mongodb://127.0.0.1:27017/fakeshop", { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

const { Pool } = require('pg')

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.DBUSER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
})

module.exports = pool;

module.exports = mongoose;