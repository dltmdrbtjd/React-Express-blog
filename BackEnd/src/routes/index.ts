import express from 'express';
import registerRouter from './register';
import loginRouter from './login';
import postRouter from './post';
import auth from '../middleware/auth';

const router = express.Router();

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/post', postRouter);
router.use(auth);

export default router;
