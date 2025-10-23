// The core business logic and data access
import { LoginUserDto } from "@galaxify/commons";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../../models/UserModel.js";
import UnauthorizedError from "@/errors/UnauthorizedError.js";

// The entity representing our user
export interface User {
    id: string;
    email: string;
}

// All logic for the login command is here
export async function execute(dto: LoginUserDto): Promise<{ token: string }> {
    // 1. Data Access: Find the user by email
    const user = await UserModel.findOne({ email: dto.email });
    if (!user) {
        throw new UnauthorizedError("invalid credentials");
    }

    // 2. Business Logic: Compare passwords
    const isPasswordMatch = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordMatch) {
        throw new UnauthorizedError("invalid credentials");
    }

    // 3. Business Logic: Generate JWT
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET as string, {
        expiresIn: parseInt(process.env.JWT_EXPIRES_IN || "86400", 10),
    });

    return { token };
}
