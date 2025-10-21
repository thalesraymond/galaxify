import { RegisterDTO } from "./registerDTO.js";
import { User } from "./userEntity.js";
import { UserRepository } from "./userRepository.js";
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
