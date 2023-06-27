
import bcrypt from 'bcrypt';

import User from '../../models/user';
import dbConnect from '../../utils/dbConnect';


export default async function login(req, res, next) {
  const { method } = req;

  await dbConnect();
  console.log('dbconneted')


  
  if (method === 'POST') {
    const { studentId, password } = req.body;
    const user = await User.findOne({ studentId }).select('+password');

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(201).json({
      status: 'success',
    
      data: {
        user,
      },
    });
  }


  if (method === 'GET') {
    try {
      const user = await User.find();
   
      res.status(200).json({
          status:'sucess',
          length: user.length,
          data:{
              user
          }
      })
    }catch(err) {
      console.log(err)
    }
}
}


