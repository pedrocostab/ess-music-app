import { IPlaylistRepository } from 'database-abstraction-layer';
import { Playlist } from 'music-app-models';

export class PlaylistRepository implements IPlaylistRepository {
    getAllByOwnerEmail(email: string): Playlist[] {
        throw new Error('Method not implemented.');
    }
    add(instance: Playlist): boolean {
        throw new Error('Method not implemented.');
    }
    update(instance: Playlist): boolean {
        throw new Error('Method not implemented.');
    }
    delete(instance: Playlist): boolean {
        throw new Error('Method not implemented.');
    }
    getAll(): Playlist[] {
        throw new Error('Method not implemented.');
    }
}
