import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const { SECRET_KEY } = process.env;


export default (req:express.Request, res:express.Response, next:express.NextFunction) => {
  const { authorization } = req.headers;
  const [tokenType, tokenValue]: any = authorization?.split(" ");

  if(tokenType !== 'Bearer') {
    res.status(401).send({
      errorMessage: '로그인 후 이용해주세요'
    });
    return;
  }

  try {
    const { userid }: any = jwt.verify(tokenValue, `${SECRET_KEY}`);

    User.findById(userid).then((user) => {
      if(user === null) {
        throw new Error('invaildUser');
      }
      res.locals.userid = userid;
      next();
    });
  } catch (err: any) {
    if(err.name === 'TokenExpiredError') {
      res.status(419).send({ message: '토큰이 만료되었습니다.' });
      return;
    } else {
      res.status(401).send({ message: '토큰이 유효하지 않습니다.' });
    }
  }
};