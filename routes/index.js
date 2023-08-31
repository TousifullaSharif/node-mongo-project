const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, My self Tousif');
});

module.exports = router;