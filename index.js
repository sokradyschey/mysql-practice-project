const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Sok',
    password: '123456',
    database: 'acme',
});

db.connect();

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';

    db.query(sql, (err, result) => {
        if(err) throw error;
        res.send(result);
    });
});

app.listen(5000, () => console.log("Server Started ..."));