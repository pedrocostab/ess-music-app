import { IPlaylistRepository } from 'database-abstraction-layer';
import { copy, Playlist } from 'music-app-models';
import { JsonDB } from './json-handling/json-handling';

export class PlaylistRepository implements IPlaylistRepository {
    jsonDb: JsonDB;

    constructor(jsonDb: JsonDB){
        this.jsonDb = jsonDb;
    }

    getAllByOwnerEmail(email: string): Playlist[] {
        return this.jsonDb.playlists.filter(p => p.owner_email == email).map((p) => copy(p));
    }

    add(instance: Playlist): boolean {
        if(
            this.jsonDb.playlists.find(
                p => 
                    p.owner_email == instance.owner_email &&
                    p.number == instance.number
            )
        )
            return false;
        
        this.jsonDb.playlists.push(instance);
        this.jsonDb.saveChanges();

        return true;
    }

    update(instance: Playlist): boolean {
        let usr = this.jsonDb.playlists.find(
            p => 
                p.owner_email == instance.owner_email &&
                p.number == instance.number
        );

        if(!usr)
            return false;
        
        Object.assign(usr, instance);
        this.jsonDb.saveChanges();

        return true;
    }

    delete(instance: Playlist): boolean {
        let index = this.jsonDb.playlists.indexOf(instance);

        if(index == -1)
            return false;
        
        this.jsonDb.playlists = this.jsonDb.playlists.filter(
            p => p.owner_email != instance.owner_email && p.number != instance.number
        );

        this.jsonDb.saveChanges();

        return true;
    }

    getAll(): Playlist[] {
        return this.jsonDb.playlists.map(
            p => copy(p)
        );
    }
}
