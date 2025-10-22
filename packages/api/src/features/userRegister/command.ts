// The core business logic and data access
import { RegisterUserDto } from "@galaxify/commons";
import bcrypt from "bcryptjs";

// The entity representing our user
export interface User {
    email: string;
    passwordHash: string;
}

// All logic for the registration command is here
export async function handleRegisterUserCommand(dto: RegisterUserDto): Promise<User> {
    // 1. Business Logic: Hash the password
    const passwordHash = await bcrypt.hash(dto.password, 10);

    const newUser: User = {
        email: dto.email,
        passwordHash: passwordHash,
    };

    // 2. Data Access: Save the user to the database
    // TODO: Create a models folder in ./src/models to define UserModel using mongoose

    console.log(`[Vertical Slice] Saved user ${newUser}`);
    return newUser; // TODO: retrieve user created with id from database
}
