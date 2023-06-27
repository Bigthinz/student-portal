import Course from '@/models/course';
import dbConnect from '@/utils/dbConnect';

export default async function login(req, res, next) {
  const { method } = req;

  await dbConnect();
  console.log('dbconneted');

  if (method === 'GET') {
    try {
      const course = await Course.find({ type: 'elective' });
      console.log('Courses');
      res.status(200).json({
        course,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
