import { Constructable } from "./Constructable";
import { User } from "./User";

export class Playlist extends Constructable {
    owner_email: string;
    number: number;
    name: string;
    description: string;
    privacy: Privacy
}

export enum Privacy {
    Public,
    Private
}