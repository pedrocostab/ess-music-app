import { ICategoryRepository } from 'database-abstraction-layer';
import { Category, copy } from 'music-app-models';
import { JsonDB } from './json-handling/json-handling';

export class CategoryRepository implements ICategoryRepository {
    jsonDb: JsonDB;

    constructor(jsonDb: JsonDB){
        this.jsonDb = jsonDb;
    }

    add(instance: Category): boolean {
        if(
            this.jsonDb.categories.find(
                c => 
                    c.name == instance.name
            )
        )
            return false;
        
        this.jsonDb.categories.push(instance);
        this.jsonDb.saveChanges();

        return true;
    }

    update(instance: Category): boolean {
        if(
            this.jsonDb.categories.find(
                c => 
                    c.name == instance.name
            )
        )
            return false;
        
        this.jsonDb.categories.push(instance);
        this.jsonDb.saveChanges();

        return true;
    }


    delete(instance: Category): boolean {
        let index = this.jsonDb.categories.indexOf(instance);

        if(index == -1)
            return false;
        
        this.jsonDb.categories = this.jsonDb.categories.filter(
            c => c.name
        );

        this.jsonDb.saveChanges();

        return true;
    }

    getAll(): Category[] {
        return this.jsonDb.categories.map(
            c => copy(c)
        );
    }
}