const express = require('express');
const app = express();
const mongoose = require('mongoose');         //MongoDB is the database being used
const bodyParser = require('body-parser');    // This allows JSON to be parsed into a res
const cors = require('cors');                 // Allows access to this API from other sites
require('dotenv/config');

// Location matters. Keep here :)
app.use(cors());
app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
  res.send('Hello welcome to the Homepage');
});


// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => {
    console.log('Connected to DB!');
  });

// Listening
app.listen(8000);
console.log('Listening on 8000');
