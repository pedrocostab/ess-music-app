import { IUserRepository } from 'database-abstraction-layer';
import { User } from 'music-app-models';

export class UserRepository implements IUserRepository {
    getByEmail(email: string): User {
        throw new Error('Method not implemented.');
    }
    add(instance: User): boolean {
        throw new Error('Method not implemented.');
    }
    update(instance: User): boolean {
        throw new Error('Method not implemented.');
    }
    delete(instance: User): boolean {
        throw new Error('Method not implemented.');
    }
    getAll(): User[] {
        throw new Error('Method not implemented.');
    }

}