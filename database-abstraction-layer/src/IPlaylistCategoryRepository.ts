import { PlaylistCategory } from 'music-app-models';
import { IRepository } from './IRepository';

export interface IPlaylistCategoryRepository extends IRepository<PlaylistCategory> {
    getAllByPlaylist(playlist_owner: string, playlist_number: number): PlaylistCategory[];
    getAllByCategory(category_name: string): PlaylistCategory[];
}