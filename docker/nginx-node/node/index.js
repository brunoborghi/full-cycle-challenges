const express = require('express')
const mysql = require('mysql');

const app = express()
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

app.get('/', (req, res) => {
      const connection = mysql.createConnection(config);

      const sql = `INSERT INTO people(name) values('Bruno')`;
      connection.query(sql);

      connection.query(`SELECT * FROM people`, (err, response) => {
            res.send(`<h1>Full Cycle Rocks!</h1> <ul>${response.map(user => `<li>${user.name}</li>`).join(' ')}</ul>`)
      });

      connection.end();
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})