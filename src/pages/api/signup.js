import User from '@/models/user';
import dbConnect from '@/utils/dbConnect';

export default async function login(req, res, next) {
  const { method } = req;

  await dbConnect();
  console.log('dbconneted');

  if (method === 'POST') {
    try {
      const { studentId, password } = req.body;
      const user = await User.create(req.body);

      console.log(user);

      // const token = signToken(user._id)

      // // createSendToken(user, 201, res)

      res.status(201).json({
        status: 'sucess',
        // token,
        data: {
          user,
        },
      });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }
}
