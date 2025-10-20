import { User } from '../user';

export interface IUserRepository {
  register(user: User): Promise<User>;
}
