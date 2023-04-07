import * as dbi from 'database-abstraction-layer';

export class Context {
    userRepository: dbi.IUserRepository;
    songRepository: dbi.ISongRepository;
    categoryRepository: dbi.ICategoryRepository;
    playlistRepository: dbi.IPlaylistRepository;
    playlistSongRepository: dbi.IPlaylistSongRepository;
    playlistCategoryRepository: dbi.IPlaylistCategoryRepository;
    userSongHistoryRepository: dbi.IUserSongHistoryRepository;
    userFollowPlaylistRepository: dbi.IUserFollowPlaylistRepository;

    constructor(
        userRepository: dbi.IUserRepository,
        songRepository: dbi.ISongRepository,
        categoryRepository: dbi.ICategoryRepository,
        playlistRepository: dbi.IPlaylistRepository,
        playlistSongRepository: dbi.IPlaylistSongRepository,
        playlistCategoryRepository: dbi.IPlaylistCategoryRepository,
        userSongHistoryRepository: dbi.IUserSongHistoryRepository,
        userFollowPlaylistRepository: dbi.IUserFollowPlaylistRepository
    ) {
        this.userRepository = userRepository;
        this.songRepository = songRepository;
        this.categoryRepository = categoryRepository;
        this.playlistRepository = playlistRepository;
        this.playlistSongRepository = playlistSongRepository;
        this.playlistCategoryRepository = playlistCategoryRepository;
        this.userSongHistoryRepository = userSongHistoryRepository;
        this.userFollowPlaylistRepository = userFollowPlaylistRepository;
    }
}