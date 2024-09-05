const express = require('express');
const router = express.Router();

router.get('/api/v1/hello_world', (req, res) => {
  res.json({ message: 'Hello world from Vteles 2025' });
});

module.exports = router;
