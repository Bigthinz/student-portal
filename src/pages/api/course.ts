
import Course from '../../models/course';
import dbConnect from '../../utils/dbConnect';

export default async function login(req, res, next) {
  const { method } = req;

  await dbConnect();
  console.log('dbconneted')


  if (method === 'POST') {
    const course = await Course.create(req.body);

    res.status(201).json({
      status: 'success',
    
      data: {
        course,
      },
    });
  }


  if (method === 'GET') {
    try {
      const course = await Course.find();
      console.log("Courses")
      res.status(200).json({
          status:'sucess',
          length: course.length,
          data:{
              course
          }
      })
    }catch(err) {
      console.log(err)
    }
}
}


