const { mongoose, db} = require('../database');
const Schema = mongoose.Schema;

const student = db.model('Student', {
  name: String,
  city: { type: Schema.Types.ObjectId, ref: 'City'}
});

module.exports = student;
