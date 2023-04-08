import { IUserRepository } from 'database-abstraction-layer';
import { User, copy } from 'music-app-models';
import { JsonDB } from './json-handling/json-handling';

export class UserRepository implements IUserRepository {
    jsonDb: JsonDB;

    constructor(jsonDb: JsonDB){
        this.jsonDb = jsonDb;
    }

    getByEmail(email: string): User {
        return copy(this.jsonDb.users.find(u => u.email == email));
    }

    add(instance: User): boolean {
        if(this.getByEmail(instance.email))
            return false;
        
        this.jsonDb.users.push(instance);
        this.jsonDb.saveChanges();

        return true;
    }

    update(instance: User): boolean {
        let usr = this.getByEmail(instance.email);

        if(!usr)
            return false;
        
        usr.nome = instance.nome;
        usr.senha = instance.senha;

        this.jsonDb.saveChanges();
        
        return true;
    }

    delete(instance: User): boolean {
        let index = this.jsonDb.users.indexOf(instance);

        if(index == -1)
            return false;
        
        this.jsonDb.users = this.jsonDb.users.filter(u => u.email != instance.email);
        this.jsonDb.saveChanges();

        return true;
    }

    getAll(): User[] {
        return this.jsonDb.users.map(
            u => copy(u)
        );
    }

}