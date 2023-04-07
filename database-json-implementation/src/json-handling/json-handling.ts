import fs = require('fs');
import { Category, Playlist, PlaylistCategory, PlaylistSong, Song, User, UserFollowPlaylist, UserSongHistory } from 'music-app-models';


class JsonDB {
    users: User[] = [];
    songs: Song[] = [];
    playlists: Playlist[] = [];
    categories: Category[] = [];
    playlistCategories: PlaylistCategory[] = [];
    playlistSongs: PlaylistSong[] = [];
    userFollowPlaylists: UserFollowPlaylist[] = [];
    userSongHistories: UserSongHistory[] = [];

    dbFilePath:string;

    writing: boolean = false;

    saveChanges(){
        if(this.writing)
            return;
        
        this.writing = true;

        fs.writeFile(this.dbFilePath, JSON.stringify(this), null, () => {this.writing = false});
    }
}

function initDatabase(dbFilePath: string):JsonDB{
    let jsonDatabase:JsonDB;

    if(!fs.existsSync(dbFilePath)){
        jsonDatabase = new JsonDB();

        fs.writeFileSync(dbFilePath, JSON.stringify(jsonDatabase));

        return jsonDatabase;
    }

    fs.readFile(dbFilePath, function (err: any, data: any) {
        if (err) {
            console.error(err)
        }
    
        jsonDatabase = JSON.parse(data);
    })

    return jsonDatabase;
}


export {
    JsonDB,
    initDatabase
}