import { Constructable } from "./Constructable";

export class UserSongHistory extends Constructable {
    user_email: string;
    song_id: number;
    timestamp: Date;
}