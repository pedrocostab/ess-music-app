import { IUserRepository } from 'database-abstraction-layer';
import { User, copy } from 'music-app-models';

export class UserRepository implements IUserRepository {
    users:User[] = [];

    getByEmail(email: string): User {
        return this.users.find(u => u.email == email);
    }

    add(instance: User): boolean {
        if(this.getByEmail(instance.email))
            return false;
        
        this.users.push(instance);

        return true;
    }

    update(instance: User): boolean {
        let usr = this.getByEmail(instance.email);

        if(!usr)
            return false;
        
        usr.nome = instance.nome;
        usr.senha = instance.senha;
        
        return true;
    }

    delete(instance: User): boolean {
        let index = this.users.indexOf(instance);

        if(index == -1)
            return false;
        
        this.users = this.users.filter(u => u.email != instance.email);

        return true;
    }

    getAll(): User[] {
        return this.users.map(
            u => copy(u)
        );
    }

}