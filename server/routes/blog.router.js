const express = require('express');
const pool = require('../modules/pool');
const { default: logger } = require('redux-logger');
const router = express.Router();

// GET route
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "blog" WHERE user_id = $1';
  pool.query(queryText, [req.user.id]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  });
});



module.exports = router;