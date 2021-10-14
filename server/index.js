const express = require("express");
const path = require('path');
const routes = require('./routes/api');
const userRoutes = require('./routes/userApi');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

const mangoose = require('mongoose');
mangoose.connect('mongodb://localhost:27017/kgDB');

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(express.json());
// Handle GET requests to /api route
app.use('/api', routes);
app.use('/userapi', userRoutes);
  
app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});