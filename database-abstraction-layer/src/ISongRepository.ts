import { Song } from 'music-app-models';
import { IRepository } from './IRepository';

export interface ISongRepository extends IRepository<Song> {}