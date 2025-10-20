import { User } from '../../domain/user';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import UserModel from '../models/UserModel';
import { UserAdapter } from '../adapters/UserAdapter';

export class UserRepository implements IUserRepository {
  async register(user: User): Promise<User> {
    const userToSave = UserAdapter.toPersistence(user);
    const savedUser = await UserModel.create(userToSave);
    return UserAdapter.toDomain(savedUser);
  }
}
