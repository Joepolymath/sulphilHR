const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Users router working',
    status: 'success',
  });
});

module.exports = router;
