import mongoose from 'mongoose';

// eslint-disable-next-line unused-imports/no-unused-imports
import Course from '@/models/course';
// eslint-disable-next-line unused-imports/no-unused-imports
import User from '@/models/user';

const registeredCourseSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'course name is required in this field'],
    unique: false,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'student id is required in this field'],
    unique: false,
  },
});

module.exports =
  mongoose.models.RegisteredCourse ||
  mongoose.model('RegisteredCourse', registeredCourseSchema);
