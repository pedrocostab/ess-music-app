import { IUserSongHistoryRepository } from 'database-abstraction-layer';
import { UserSongHistory } from 'music-app-models';

export class UserSongHistoryRepository implements IUserSongHistoryRepository {
    getAllByUserEmail(email: string): UserSongHistory[] {
        throw new Error('Method not implemented.');
    }
    add(instance: UserSongHistory): boolean {
        throw new Error('Method not implemented.');
    }
    update(instance: UserSongHistory): boolean {
        throw new Error('Method not implemented.');
    }
    delete(instance: UserSongHistory): boolean {
        throw new Error('Method not implemented.');
    }
    getAll(): UserSongHistory[] {
        throw new Error('Method not implemented.');
    }
}