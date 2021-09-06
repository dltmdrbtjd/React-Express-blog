import { userSchema } from './models/user';

declare global {
  namespace Express {
    interface Request {
      user: typeof userSchema;
    }
  }
}