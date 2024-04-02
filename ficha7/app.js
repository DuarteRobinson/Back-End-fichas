const express = require('express')
const mysql = require('mysql2')

const app = express();
app.use(express.json())

// SERVER HTTP
app.listen(3000, function () {
});

// LIgação MYSQL
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
})

connection.query("select * from ficha7.people", (err, results, fields) => {
    console.log(results);
})

app.get('/', (req, res) => {
    connection.query("select * from ficha7.people", (err, results, fields) => {
        console.log(results);
    })
})

// POST -INSERT
// GET - SELECT
// PUT - UPDATE
// DELETE - DELETE