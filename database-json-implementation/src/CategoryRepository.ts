import { ICategoryRepository } from 'database-abstraction-layer';
import { Category } from 'music-app-models';

export class CategoryRepository implements ICategoryRepository {
    add(instance: Category): boolean {
        throw new Error('Method not implemented.');
    }
    update(instance: Category): boolean {
        throw new Error('Method not implemented.');
    }
    delete(instance: Category): boolean {
        throw new Error('Method not implemented.');
    }
    getAll(): Category[] {
        throw new Error('Method not implemented.');
    }
}