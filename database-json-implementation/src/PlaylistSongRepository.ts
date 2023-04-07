import { IPlaylistSongRepository } from 'database-abstraction-layer';
import { copy, PlaylistSong } from 'music-app-models';
import { JsonDB } from './json-handling/json-handling';

export class PlaylistSongRepository implements IPlaylistSongRepository {
    jsonDb: JsonDB;

    constructor(jsonDb: JsonDB){
        this.jsonDb = jsonDb;
    }

    getAllByPlaylist(owner_email: string, playlist_number: number): PlaylistSong[] {
        return this.jsonDb.playlistSongs.filter(
            ps =>
                ps.playlist_owner_email == owner_email &&
                ps.playlist_number == playlist_number
        ).map(copy);
    }

    add(instance: PlaylistSong): boolean {
        if(
            this.jsonDb.playlistSongs.find(
                p => 
                    p.playlist_owner_email == instance.playlist_owner_email &&
                    p.playlist_number == instance.playlist_number &&
                    p.song_id == instance.song_id
            )
        )
            return false;

        this.jsonDb.playlistSongs.push(instance);
        this.jsonDb.saveChanges();

        return true;
    }
    
    update(instance: PlaylistSong): boolean {
        return false;
    }

    delete(instance: PlaylistSong): boolean {
        let index = this.jsonDb.playlistSongs.indexOf(instance);

        if(index == -1)
            return false;
        
        this.jsonDb.playlistSongs = this.jsonDb.playlistSongs.filter(
            p => p.playlist_owner_email != instance.playlist_owner_email &&
            p.playlist_number != instance.playlist_number &&
            p.song_id != instance.song_id
        );

        this.jsonDb.saveChanges();

        return true;
    }

    getAll(): PlaylistSong[] {
        return this.jsonDb.playlistSongs.map(copy);
    }
}