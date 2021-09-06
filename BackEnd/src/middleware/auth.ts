import express from 'express';
import jwt from 'jsonwebtoken';


module.exports = function (req:express.Request , res:express.Response , next:express.NextFunction) {
  const token = req.header('x-auth-token');

  if(!token) {
    return res.status(401).json({ msg:" 토근이 만료되었습니다."})
  }

  try {
    const decoded = <any>jwt.verify(token, 'jwtSecret');

    req.user = decoded.user;
    next();
  } catch(err) {
    console.error(err);
  }
}