const express = require('express');

const router = express.Router();

router.get('/posts', (req, res) => {
  res.send("Hello to Posts");
});

module.exports = router;
