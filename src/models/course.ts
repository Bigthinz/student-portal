import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
name: {
    type: String,
    required: [true, 'course name is required in this field'],
    unique: false,
  },
  code: {
    type: String,
    required: [true, 'course code is required in this field'],
    unique: false,
  },
  type: {
    type: String,
    default: null,
  },
});



module.exports = mongoose.models.Course || mongoose.model('Course', courseSchema);
