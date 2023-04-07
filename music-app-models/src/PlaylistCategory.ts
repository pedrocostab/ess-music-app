import { Constructable } from "./Constructable";

export class PlaylistCategory extends Constructable {
    playlist_owner_email: string;
    playlist_number: number;
    category_name: string;
}