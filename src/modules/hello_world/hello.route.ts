import { Router } from 'express';
import AuthController from '@modules/auth/auth.controller';
import { CreateUserDto, LoginUserDto } from '@modules/user/users.dto';
import { Route } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@/middlewares/auth.middleware';
import { adminMiddleware } from '@/middlewares/admin.middleware';
import { HelloController } from './hello.controller';

class HelloRoute implements Route {
  public path = '/hello-world';
  public router = Router();
  public helloController = new HelloController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.helloController.hello);
    this.router.get(`/admin${this.path}`, [authMiddleware, adminMiddleware], this.helloController.hello);
  }
}

export default HelloRoute;
