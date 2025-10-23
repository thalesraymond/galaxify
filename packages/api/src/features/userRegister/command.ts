// The core business logic and data access
import { RegisterUserDto } from "@galaxify/commons";
import bcrypt from "bcryptjs";
import UserModel from "../../models/UserModel.js";
import BadRequestError from "@/errors/BadRequestError.js";

// The entity representing our user
export interface User {
    id: string;
    email: string;
}

// All logic for the registration command is here
export async function execute(dto: RegisterUserDto): Promise<User> {
    // 1. Business Logic: Validate password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

    if (!passwordRegex.test(dto.password)) {
        throw new BadRequestError(
            "Password must be at least 6 characters long and contain at least one letter, one number, and one special character."
        );
    }

    // 2. Data Access: Check for duplicate email
    const existingUser = await UserModel.findOne({ email: dto.email });
    if (existingUser) {
        throw new BadRequestError("User with this email already exists.");
    }

    // 3. Business Logic: Hash the password
    const passwordHash = await bcrypt.hash(dto.password, 10);

    // 4. Data Access: Save the user to the database
    const createdUser = await UserModel.create({
        email: dto.email,
        password: passwordHash,
    });

    return {
        id: createdUser._id.toString(),
        email: createdUser.email,
    };
}
