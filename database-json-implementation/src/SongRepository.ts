import { ISongRepository } from 'database-abstraction-layer';
import { copy, Genre, Song } from 'music-app-models';
import { JsonDB } from './json-handling/json-handling';

export class SongRepository implements ISongRepository {
    jsonDb: JsonDB;

    constructor(jsonDb: JsonDB){
        this.jsonDb = jsonDb;
    }

    getById(id: number): Song {
        return copy( 
            this.jsonDb.songs.find(
                s => s.id == id
            )
        );
    }

    getAllByGenre(genre: Genre): Song[] {
        return this.jsonDb.songs.filter(
            s => s.genre == genre
        ).map(s => copy(s));
    }

    add(instance: Song): boolean {
        if(this.getById(instance.id))
            return false;
        
        this.jsonDb.songs.push(instance);
        this.jsonDb.saveChanges();

        return true;
    }

    update(instance: Song): boolean {
        let usr = this.getById(instance.id);

        if(!usr)
            return false;
        
        usr.name = instance.name;
        usr.genre = instance.genre;
        usr.length = instance.length;
        usr.year = instance.year;
        usr.artist = instance.artist;

        this.jsonDb.saveChanges();
        
        return true;
    }

    delete(instance: Song): boolean {
        let index = this.jsonDb.songs.indexOf(instance);

        if(index == -1)
            return false;
        
        this.jsonDb.songs = this.jsonDb.songs.filter(u => u.id != instance.id);
        this.jsonDb.saveChanges();

        return true;
    }

    getAll(): Song[] {
        return this.jsonDb.songs.map(
            s => copy(s)
        );
    }

}