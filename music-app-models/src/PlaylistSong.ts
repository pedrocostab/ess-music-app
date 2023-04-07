import { Constructable } from "./Constructable";

export class PlaylistSong extends Constructable{
    playlist_owner_email: string;
    playlist_number: number;
    song_id: number;
}