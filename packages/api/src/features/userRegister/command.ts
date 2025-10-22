// The core business logic and data access
import { RegisterUserDto } from "@galaxify/commons";
import bcrypt from "bcryptjs";
import UserModel from "../../models/UserModel.js";

// The entity representing our user
export interface User {
    id: string;
    email: string;
}

// All logic for the registration command is here
export async function handleRegisterUserCommand(dto: RegisterUserDto): Promise<User> {
    // 1. Business Logic: Hash the password
    const passwordHash = await bcrypt.hash(dto.password, 10);

    // 2. Data Access: Save the user to the database
    const createdUser = await UserModel.create({
        email: dto.email,
        password: passwordHash,
    });

    return {
        id: createdUser._id.toString(),
        email: createdUser.email,
    };
}
