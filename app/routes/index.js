var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add',(req,res, next)=>{
  res.send('Adding data');
})
router.get('/delete',(req,res, next)=>{
  res.send('Delete data');
})
router.get('/update',(req,res, next)=>{
  res.send('Update data');
})

module.exports = router;
