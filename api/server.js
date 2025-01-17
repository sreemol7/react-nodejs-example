const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 80;

// place holder for the data
const users = [
  {
    firstName: "Sree",
    lastName: "Devi",
    email: "sree@gmail.com"
  },
  {
    firstName: "Raji",
    lastName: "Kamal",
    email: "raj@gmail.com"
  },
  {
    firstName: "Sneha",
    lastName: "Aggarwal",
    email: "sneha@gmail.com"
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});