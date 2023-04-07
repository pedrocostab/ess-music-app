import { IUserSongHistoryRepository } from 'database-abstraction-layer';
import { copy, UserSongHistory } from 'music-app-models';
import { JsonDB } from './json-handling/json-handling';

export class UserSongHistoryRepository implements IUserSongHistoryRepository {
    jsonDb: JsonDB;

    constructor(jsonDb: JsonDB){
        this.jsonDb = jsonDb;
    }

    getAllByUserEmail(email: string): UserSongHistory[] {
        return this.jsonDb.userSongHistories.filter(
            h => h.user_email == email
        ).map(copy);
    }

    add(instance: UserSongHistory): boolean {
        if(
            this.jsonDb.userSongHistories.find(
                ush =>
                    ush.song_id == instance.song_id &&
                    ush.user_email == instance.user_email &&
                    ush.timestamp == instance.timestamp
            )
        )
            return false;

        this.jsonDb.userSongHistories.push(instance);
        this.jsonDb.saveChanges();

        return true;
    }

    update(instance: UserSongHistory): boolean {
        return false;
    }

    delete(instance: UserSongHistory): boolean {
        let index = this.jsonDb.userSongHistories.indexOf(instance);

        if(index == -1)
            return false;
        
        this.jsonDb.userSongHistories = this.jsonDb.userSongHistories.filter(
            ush =>
                ush.user_email != instance.user_email &&
                ush.song_id != instance.song_id &&
                ush.timestamp != instance.timestamp
        );

        this.jsonDb.saveChanges();

        return true;
    }

    getAll(): UserSongHistory[] {
        return this.jsonDb.userSongHistories.map(copy);
    }
}