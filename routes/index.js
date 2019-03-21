var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // get data from the db, and then send it through the route
  // to the views/index.hbs page, and render that (including our Db data)
  connect.query('SELECT name, avatar FROM hero', (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    } else {
      console.log(result);
      res.render('index', { avatars: result });
    }
  });
});

// Get one hero's bio information

router.get('/:hero', function(req, res, next) {
  // get data from the db, and then send it through the route
  // to the views/index.hbs page, and render that (including our Db data)
  connect.query(`SELECT * FROM hero WHERE name="${req.params.hero}"`, (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    } else {
      console.log(result);
      res.render('bio', { bioData: result[0] });
    }
  });
});

module.exports = router;
