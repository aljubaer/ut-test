import { Router } from 'express';
import UsersController from '@modules/user/users.controller';
import { Route } from '@interfaces/routes.interface';

class UsersRoute implements Route {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/me`, this.usersController.getMe);
  }
}

export default UsersRoute;
