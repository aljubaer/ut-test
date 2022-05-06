import { BasicUser } from '@modules/user/users.interface';
import { CreateUserDto } from '@modules/user/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { UserEntity } from './users.entity';
import { encryptPassword } from '@services/encryption.service';

class UserService {
  public async createUser(userData: CreateUserDto): Promise<BasicUser> {
    if (isEmpty(userData)) throw new HttpException(400, 'Invalid Data Provided');

    const user: BasicUser = await UserEntity.findOne({ where: { email: userData.email } });
    if (user) throw new HttpException(409, `User already exists`);

    const hashedPassword = await encryptPassword(userData.password);
    const createdUser: BasicUser = await UserEntity.create({ ...userData, password: hashedPassword }).save();
    return createdUser;
  }
}

export default UserService;
