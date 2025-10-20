import { User } from '../../domain/user';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { RegisterUserRequest } from '../../commons/types';
import crypto from 'crypto';

export class RegisterUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async execute(data: RegisterUserRequest): Promise<User> {
    const { email, name, lastName, password } = data;

    const id = crypto.randomUUID();

    const user = new User(id, email, name, lastName, password);

    const registeredUser = await this.userRepository.register(user);

    return registeredUser;
  }
}
