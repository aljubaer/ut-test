import { ONE_HOUR, JWT_SECRET } from '../config';
import { Token, DataStoredInToken } from '@interfaces/token.interface';
import jwt from 'jsonwebtoken';
import { TokenData } from '@/interfaces/auth.interface';

export const buildToken = (userId: number): Token => {
  const dataStoredInToken: DataStoredInToken = { id: userId };
  const expiresIn: number = ONE_HOUR;

  return { expiresIn, token: jwt.sign(dataStoredInToken, JWT_SECRET, { expiresIn }) };
};

export const createCookie = (tokenData: TokenData): string => {
  return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
};
