import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';

const router = express.Router();

router.post('/', async (req,res) => {
  const { name, userid, password } = req.body;

  try {
    let user = await User.findOne({ userid, name });
    if(user){
      return res.status(400).json({ error: [{ msg: 'userid or name already exists!'}]});
    }

    user = new User({
      name,
      userid,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    return res.status(201).send({ message: '회원가입이 완료되었습니다.'})
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

export default router;