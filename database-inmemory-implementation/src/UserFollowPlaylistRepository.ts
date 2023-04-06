import { IUserFollowPlaylistRepository } from 'database-abstraction-layer';
import { UserFollowPlaylist } from 'music-app-models';

export class UserFollowPlaylistRepository implements IUserFollowPlaylistRepository {
    getAllByUserEmail(email: string): UserFollowPlaylist[] {
        throw new Error('Method not implemented.');
    }
    add(instance: UserFollowPlaylist): boolean {
        throw new Error('Method not implemented.');
    }
    update(instance: UserFollowPlaylist): boolean {
        throw new Error('Method not implemented.');
    }
    delete(instance: UserFollowPlaylist): boolean {
        throw new Error('Method not implemented.');
    }
    getAll(): UserFollowPlaylist[] {
        throw new Error('Method not implemented.');
    }
}