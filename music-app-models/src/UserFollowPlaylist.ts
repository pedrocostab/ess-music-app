import { Constructable } from "./Constructable";

export class UserFollowPlaylist extends Constructable {
    playlist_owner_email: string;
    playlist_number: number;
    follower_email: string;
}