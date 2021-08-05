let mongoose = require('mongoose');

let imageSchema = new mongoose.Schema({
  name: String,
  href: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

var Image = mongoose.model('Image', imageSchema);
module.exports = Image;
