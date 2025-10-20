const express = require('express');
const cors = require('cors');

const app = express();
const contactRoutes = require('./routes/contact.route');


app.use(cors());
app.use(express.json());
app.use('/api/contacts', contactRoutes);

app.get('/', (req, res) => {
  res.json({message: "Welcome to contact book application"});
});

module.exports = app;