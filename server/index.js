const express = require("express");
const path = require('path');
const routes = require('./routes/api');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.use('/api', routes);
  
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