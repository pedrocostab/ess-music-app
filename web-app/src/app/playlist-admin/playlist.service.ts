import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Playlist } from './playlist';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';
  user: any;

  constructor(private http: HttpClient, private service: AuthService) {
    this.service.GetbyCode(sessionStorage.getItem('username')).subscribe(res => {
      this.user = res;
    });
  }

  createPlaylist(playlist: Playlist): Observable<Playlist | null>{
    const newPlaylists = {
      id: playlist.id,
      titulo: playlist.titulo,
      privacidade: playlist.privacidade,
      url_foto_playlist: playlist.url_foto_playlist,
      usuario_dono: this.user
    };

    return this.http.post(this.taURL + "/playlists", JSON.stringify(newPlaylists), {headers: this.headers, observe: "response"})
    .pipe(map(res => {
      if (res.status === 201) {return playlist;} else {return null;}
    }));
  }

  getPlaylistById(playlistId: string) {
    return this.http.get(this.taURL + '/playlists/' + playlistId, {'observe': 'body'})
      .pipe(map(res => res as Playlist));
  }

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get(this.taURL + "/playlists", {"observe": "body"})
      .pipe(map(res => res as Playlist[]));
  }
}
