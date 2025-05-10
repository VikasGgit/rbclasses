// models/Student.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  image: {
    public_id: String,
    url: String
  },
  testimonial: {
    type: String,
    default: ''
  },
  isTopPerformer: {
    type: Boolean,
    default: false
  },
  performanceDetails: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Student', StudentSchema);