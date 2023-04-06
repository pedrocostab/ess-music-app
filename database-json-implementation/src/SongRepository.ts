import { ISongRepository } from 'database-abstraction-layer';
import { Genre, Song } from 'music-app-models';

export class SongRepository implements ISongRepository {
    getById(id: number): Song {
        throw new Error('Method not implemented.');
    }
    getAllByGenre(genre: Genre): Song[] {
        throw new Error('Method not implemented.');
    }
    add(instance: Song): boolean {
        throw new Error('Method not implemented.');
    }
    update(instance: Song): boolean {
        throw new Error('Method not implemented.');
    }
    delete(instance: Song): boolean {
        throw new Error('Method not implemented.');
    }
    getAll(): Song[] {
        throw new Error('Method not implemented.');
    }

}