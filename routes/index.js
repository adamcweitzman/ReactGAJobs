var express = require('express');
var router = express.Router();
var Job = require('../models/Jobs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/api/jobs', function(req, res, next) {
	console.log(req.body.contact)
	var job = new Job({
		company: req.body.company,
		contact: req.body.contact,
		category: req.body.category
	})
	job.save(function(err) {
		if (err) throw err;
  	})
  	res.send('the post went through')
});

router.get('/api/jobs', function(req, res) {
    Job.find(function(err, jobs) {
        res.json(jobs);
    });
});

router.post('/api/delete', function(req, res) {
	console.log('this is router', req.body.data)
	Job.findOneAndRemove({ company: req.body.data }, function(err) {
    	if (err) throw err;
    	console.log('User successfully deleted!');
  	})
  	res.send('the delete went through')
})

module.exports = router;