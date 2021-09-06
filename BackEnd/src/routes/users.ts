import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const User = require('../models/user');
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

    const payload = {
      user: {
        id: userid
      },
    };

    jwt.sign(
      payload,
      'jwtSecret',
      { expiresIn: '24h' },
      (err, token) => {
        if(err) throw err;
        res.send({ token });
      }
    );
    
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;