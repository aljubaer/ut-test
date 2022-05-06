import { BasicUser } from './users.interface';
import request from 'supertest';
import App from '../../app';
import UserRoute from '@modules/user/users.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

// describe('Testing Users', () => {
//   describe('[GET] /users/me', () => {
//     it('response statusCode 200 / findOne', () => {
//       const userId = 1;
//       const findUser: BasicUser = userDao.findById(userId);
//       const usersRoute = new UserRoute();
//       const app = new App([usersRoute]);

//       return request(app.getServer()).get(`${usersRoute.path}/${userId}`).expect(200, { data: findUser, message: 'findOne' });
//     });
//   });
// });
