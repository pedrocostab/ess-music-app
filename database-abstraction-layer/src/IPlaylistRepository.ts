import { Playlist } from 'music-app-models';
import { IRepository } from './IRepository';

export interface IPlaylistRepository extends IRepository<Playlist> {
    getAllByOwnerEmail(email: string): Playlist[];
}