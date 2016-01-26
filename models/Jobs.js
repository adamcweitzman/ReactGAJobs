var mongoose = require('mongoose');


var jobsSchema = new mongoose.Schema({
  company: String,
  contact: String, 
  category: String
});


var jobs = mongoose.model('jobs', jobsSchema);
// Make this available to our other files
module.exports = jobs;