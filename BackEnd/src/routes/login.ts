import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import bcrypt from 'bcrypt';

const { SECRET_KEY } = process.env;
const router = express.Router();

router.post('/', async(req,res,next) => {
  try {
    const { userid, password } = req.body;
  
    console.log(req.body);
    const user = await User.findOne({
      userid,
    });

    if(!user) {
      return res.status(400).send({
        errorMessage: '아이디 또는 비밀번호가 틀렸습니다.'
      });
    }

    const payload = {
      user: {
        id: userid
      },
    };

    const match = await bcrypt.compare(password, user.password);
    if(match) {
      const token = jwt.sign(payload, `${SECRET_KEY}`, {expiresIn: '24h'});
      return res.send({ result: {
        token: token,
      }})
    } else {
      return res.status(400).send({ errorMessage: '비밀번호가 틀렸습니다.' });
    }
  } catch (err) {
    console.error(err);
    res.status(400).send({
      errorMessage: '아이디 또는 패스워드가 틀렸습니다.'
    })
  }
});

export default router;