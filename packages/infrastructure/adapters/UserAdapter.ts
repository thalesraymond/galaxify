import { User } from '../../domain/user';
import { IUser } from '../models/UserModel';

export class UserAdapter {
  public static toDomain(user: IUser): User {
    return new User(
      user._id.toString(),
      user.email,
      user.name,
      user.lastName,
      user.password
    );
  }

  public static toPersistence(user: User): IUser {
    return {
      _id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      password: user.password,
    } as IUser;
  }
}
