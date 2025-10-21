// The core business logic and data access
import { RegisterUserDto } from "@galaxify/commons"
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';

// The entity representing our user in the  database
export interface User {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
}

// All logic for the registration command is here
export async function handleRegisterUserCommand(dto: RegisterUserDto): Promise<User> {
  // 1. Business Logic: Hash the password
  const passwordHash = await bcrypt.hash(dto.password, 10);

  const newUser: User = {
    id: crypto.randomUUID(),
    email: dto.email,
    name: dto.name,
    passwordHash: passwordHash,
  };

  // 2. Data Access: Save the user to the database
  await db.users.save(newUser);
  
  console.log(`[Vertical Slice] Saved user ${newUser.name}`);
  return newUser;
}