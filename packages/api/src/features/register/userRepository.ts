import { User } from "./userEntity.js";
import { UserModel } from "./userModel.js";

export interface UserRepository {
    findByEmail(email: string): Promise<User | null>;
    save(user: User): Promise<void>;
}

export class MongoUserRepository implements UserRepository {
    async findByEmail(email: string): Promise<User | null> {
        const user = await UserModel.findOne({ email });
        return user ? new User(user, user.id) : null;
    }

    async save(user: User): Promise<void> {
        await UserModel.create(user);
    }
}
