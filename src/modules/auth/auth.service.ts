import { BasicUser } from '@modules/user/users.interface';
import { matchPassword } from '@services/encryption.service';
import UserService from '@modules/user/users.service';
import { buildToken, createCookie } from '@services/token.provider';
import { CreateUserDto, LoginUserDto } from '@modules/user/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../user/users.entity';

@EntityRepository()
class AuthService extends Repository<UserEntity> {
  private userService = new UserService();

  public async signup(userToRegister: CreateUserDto): Promise<BasicUser> {
    return this.userService.createUser(userToRegister);
  }

  public async login(userData: LoginUserDto): Promise<{ cookie: string; user: BasicUser }> {
    if (isEmpty(userData)) throw new HttpException(400, 'Invalid credentials');

    const foundUser: BasicUser = await UserEntity.findOne({ where: { email: userData.email } });
    if (!foundUser) throw new HttpException(401, `Username or password wrong`);

    const isPasswordMatching: boolean = await matchPassword(userData.password, foundUser.password);
    if (!isPasswordMatching) throw new HttpException(401, `Username or password wrong`);

    const tokenData = buildToken(foundUser.id);
    const cookie = createCookie(tokenData);

    return { cookie, user: foundUser };
  }
}

export default AuthService;
