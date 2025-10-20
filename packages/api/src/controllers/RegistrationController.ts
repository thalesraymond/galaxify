import { Request, Response } from 'express';
import { RegisterUserService } from '../../../services/RegisterUserService';
import { UserRepository } from '../../../infrastructure/repositories/UserRepository';
import { StatusCodes }from 'http-status-codes';

export class RegistrationController {
  public async handle(req: Request, res: Response) {
    const { email, name, lastName, password } = req.body;
    const userRepository = new UserRepository();
    const registerUserService = new RegisterUserService(userRepository);

    const user = await registerUserService.execute({
      email,
      name,
      lastName,
      password,
    });

    return res.status(StatusCodes.CREATED).json(user);
  }
}
