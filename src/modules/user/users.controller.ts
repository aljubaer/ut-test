import { NextFunction, Request, Response } from 'express';

import userService from '@modules/user/users.service';

class UsersController {
  public userService = new userService();

  public getMe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);

      // Todo:Find current user

      // res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
