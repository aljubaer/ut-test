import { Router } from 'express';
import AuthController from '@modules/auth/auth.controller';
import { CreateUserDto, LoginUserDto } from '@modules/user/users.dto';
import { Route } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class AuthRoute implements Route {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}signup`, validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
    this.router.post(`${this.path}signin`, validationMiddleware(LoginUserDto, 'body'), this.authController.signIn);
  }
}

export default AuthRoute;
