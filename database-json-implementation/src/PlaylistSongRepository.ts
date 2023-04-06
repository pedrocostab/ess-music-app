import { IPlaylistSongRepository } from 'database-abstraction-layer';
import { PlaylistSong } from 'music-app-models';

export class PlaylistSongRepository implements IPlaylistSongRepository {
    getAllByPlaylist(owner_email: string, playlist_number: number): PlaylistSong[] {
        throw new Error('Method not implemented.');
    }
    add(instance: PlaylistSong): boolean {
        throw new Error('Method not implemented.');
    }
    update(instance: PlaylistSong): boolean {
        throw new Error('Method not implemented.');
    }
    delete(instance: PlaylistSong): boolean {
        throw new Error('Method not implemented.');
    }
    getAll(): PlaylistSong[] {
        throw new Error('Method not implemented.');
    }
}