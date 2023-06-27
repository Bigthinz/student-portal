import RegisterCourse from '../../models/registeredCourses';
import dbConnect from '../../utils/dbConnect';

export default async function login(req, res, next) {
  const { method } = req;

  await dbConnect();
  console.log('db connected');

  if (method === 'GET') {
    try {
      const { studentId } = req.query;

      // Find registered courses for the specified student ID
      const courses = await RegisterCourse.find({ studentId });

      res.status(200).json({
        courses,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: 'error',
        message: 'Failed to fetch registered courses for the student',
      });
    }
  }
}
