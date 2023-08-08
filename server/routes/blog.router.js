const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET ALL Blogs
router.get('/', (req, res) => {
 
      const queryText = `SELECT * FROM blog`;
      pool.query(queryText).then( result => {
        res.send(result.rows);
      }).catch( error => {
        console.log('GET blog error', error);
        res.sendStatus(500)
      })

});

// GET a Specific Blog
router.get('/:id', (req, res) => {

      const queryText = `SELECT * FROM blog WHERE id=$1`;
      pool.query(queryText, [req.params.id]).then (result => {
        res.send(result.rows[0]);
      }).catch(error => {
        console.log(error);
        res.sendStatus(500)
      })
});

// POST Blog
router.post('/', (req, res) => {
  console.log(req.body);
  const queryText = 
  `INSERT INTO "blog" ("user_id", "author_first_name", "author_last_name", "date", "title", "post") VALUES ($1, $2, $3, $4, $5, $6) RETURNING "id";`
  pool.query(queryText, [
    req.user.id, 
    req.body.author_first_name, 
    req.body.author_last_name, 
    req.body.date,
    req.body.title,
    req.body.post
  ]).then(result => {
    console.log('New blog Id:', result.rows[0].id);
  }).catch(e => {
    console.log(e);
    res.sendStatus(500);
  })
})

// UPDATE Blog


// DELETE Blog
router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const queryText = `DELETE FROM "blog" WHERE "id" = $1 AND "user_id" = $2;`;
    pool.query(queryText, [
      req.params.id, 
      req.user.id
    ]).then(() => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log(error in router);
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(403); // Forbidden
  }
})

module.exports = router;