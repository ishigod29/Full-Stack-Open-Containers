const express = require('express');
const router = express.Router();
const configs = require('../util/config')

let visits = 0

/* GET index data. */ 
router.get('/', async (_, res) => { 
  visits++

  res.send({
    ...configs,
    visits
  });
});


/*GET todo statics. */
router.get("/statistics", async (_, res) => {
  res.send({added_todos: 0});
});

module.exports = router;
