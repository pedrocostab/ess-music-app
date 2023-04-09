import { IPlaylistCategoryRepository } from 'database-abstraction-layer';
import { copy, PlaylistCategory } from 'music-app-models';
import { JsonDB } from './json-handling/json-handling';

export class PlaylistCategoryRepository implements IPlaylistCategoryRepository {
    jsonDb: JsonDB;

    constructor(jsonDb: JsonDB){
        this.jsonDb = jsonDb;
    }


    getAllByPlaylist(playlist_owner: string, playlist_number: number): PlaylistCategory[] {
        return this.jsonDb.playlistCategories.filter(
            pc => 
                pc.playlist_owner_email == playlist_owner &&
                pc.playlist_number == playlist_number
        ).map(copy);
    }

    getAllByCategory(category_name: string): PlaylistCategory[] {
        return this.jsonDb.playlistCategories.filter(
            pc => 
                pc.category_name == category_name
        ).map(copy);
    }

    add(instance: PlaylistCategory): boolean {
        if(
            this.jsonDb.playlistCategories.find(
                p => 
                    p.playlist_owner_email == instance.playlist_owner_email &&
                    p.playlist_number == instance.playlist_number &&
                    p.category_name == instance.category_name
            )
        )
            return false;
        
        this.jsonDb.playlistCategories.push(instance);
        this.jsonDb.saveChanges();

        return true;
    }

    update(instance: PlaylistCategory): boolean {
        return false;
    }

    delete(instance: PlaylistCategory): boolean {
        let index = this.jsonDb.playlistCategories.indexOf(instance);

        if(index == -1)
            return false;
        
        this.jsonDb.playlistCategories = this.jsonDb.playlistCategories.filter(
            p => p.playlist_owner_email != instance.playlist_owner_email &&
            p.playlist_number != instance.playlist_number &&
            p.category_name != instance.category_name
        );

        this.jsonDb.saveChanges();

        return true;
    }

    getAll(): PlaylistCategory[] {
        return this.jsonDb.playlistCategories.map(copy);
    }
}