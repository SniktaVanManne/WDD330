const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Hello Friend");
});

router.get('/specific', (req, res) => {
  res.send("Hello Specific Friend");
});

module.exports = router;
