import { UserFollowPlaylist } from 'music-app-models';
import { IRepository } from './IRepository';

export interface IUserFollowPlaylistRepository extends IRepository<UserFollowPlaylist> {
    getAllByUserEmail(email:string): UserFollowPlaylist[];
}