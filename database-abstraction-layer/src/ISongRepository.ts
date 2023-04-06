import { Song, Genre } from 'music-app-models';
import { IRepository } from './IRepository';

export interface ISongRepository extends IRepository<Song> {
    getById(id: number): Song;
    getAllByGenre(genre: Genre): Song[];
}