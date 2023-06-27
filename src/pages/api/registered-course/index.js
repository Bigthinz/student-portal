import RegisterCourse from '../../../models/registeredCourses';
import dbConnect from '../../../utils/dbConnect';

export default async function index(req, res, next) {
  const { method } = req;

  await dbConnect();
  console.log('dbconneted');

  if (method === 'POST') {
    const course = await RegisterCourse.create(req.body);

    res.status(201).json({
      status: 'success',

      data: {
        course,
      },
    });
  }

  if (method === 'GET') {
    try {
      const course = await RegisterCourse.find()
        .populate('courseId')
        .populate('studentId');

      res.status(200).json({
        status: 'sucess',
        length: course.length,
        data: {
          course,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}
