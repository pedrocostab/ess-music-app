import { IPlaylistCategoryRepository } from 'database-abstraction-layer';
import { PlaylistCategory } from 'music-app-models';

export class PlaylistCategoryRepository implements IPlaylistCategoryRepository {
    getAllByPlaylist(playlist_owner: string, playlist_number: number): PlaylistCategory[] {
        throw new Error('Method not implemented.');
    }
    getAllByCategory(category_name: string): PlaylistCategory[] {
        throw new Error('Method not implemented.');
    }
    add(instance: PlaylistCategory): boolean {
        throw new Error('Method not implemented.');
    }
    update(instance: PlaylistCategory): boolean {
        throw new Error('Method not implemented.');
    }
    delete(instance: PlaylistCategory): boolean {
        throw new Error('Method not implemented.');
    }
    getAll(): PlaylistCategory[] {
        throw new Error('Method not implemented.');
    }
}