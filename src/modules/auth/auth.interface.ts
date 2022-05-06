import { BasicUser } from './../user/users.interface';
import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: BasicUser;
}

export interface DataStoredInToken {
  id: number;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}
