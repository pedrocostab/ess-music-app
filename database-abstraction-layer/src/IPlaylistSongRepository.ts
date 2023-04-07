import { PlaylistSong } from 'music-app-models';
import { IRepository } from './IRepository';

export interface IPlaylistSongRepository extends IRepository<PlaylistSong> {
    getAllByPlaylist(owner_email: string, playlist_number: number): PlaylistSong[];
}