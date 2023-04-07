import { IUserFollowPlaylistRepository } from 'database-abstraction-layer';
import { copy, UserFollowPlaylist } from 'music-app-models';
import { JsonDB } from './json-handling/json-handling';

export class UserFollowPlaylistRepository implements IUserFollowPlaylistRepository {
    jsonDb: JsonDB;

    constructor(jsonDb: JsonDB){
        this.jsonDb = jsonDb;
    }

    getAllByUserEmail(email: string): UserFollowPlaylist[] {
        return this.jsonDb.userFollowPlaylists.filter(
            ufp => ufp.follower_email == email
        ).map(copy);
    }

    add(instance: UserFollowPlaylist): boolean {
        if(
            this.jsonDb.userFollowPlaylists.find(
                p => 
                    p.playlist_owner_email == instance.playlist_owner_email &&
                    p.playlist_number == instance.playlist_number &&
                    p.follower_email == instance.follower_email
            )
        )
            return false;

        this.jsonDb.userFollowPlaylists.push(instance);
        this.jsonDb.saveChanges();

        return true;
    }

    update(instance: UserFollowPlaylist): boolean {
        return false;
    }

    delete(instance: UserFollowPlaylist): boolean {
        let index = this.jsonDb.userFollowPlaylists.indexOf(instance);

        if(index == -1)
            return false;
        
        this.jsonDb.userFollowPlaylists = this.jsonDb.userFollowPlaylists.filter(
            p => p.playlist_owner_email != instance.playlist_owner_email &&
            p.playlist_number != instance.playlist_number &&
            p.follower_email != instance.follower_email
        );

        this.jsonDb.saveChanges();

        return true;
    }

    getAll(): UserFollowPlaylist[] {
        return this.jsonDb.userFollowPlaylists.map(copy);
    }
}