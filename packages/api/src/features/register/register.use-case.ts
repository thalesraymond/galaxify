import { RegisterDTO } from "./register.dto.js";
import { User } from "./user.entity.js";
import { UserRepository } from "./user.repository.js";
import bcrypt from "bcrypt";

export class RegisterUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(data: RegisterDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = new User({
            email: data.email,
            password: hashedPassword,
        });

        await this.userRepository.save(user);
    }
}
