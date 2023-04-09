import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable, switchMap} from 'rxjs';
import { Musica } from './musica';

@Injectable()
export class MusicaService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createMusica(artistaId: string, albumId: string, musica: any): Observable<any | null>{
    const newMusica = {
      id: parseInt(musica.id),
      titulo: musica.titulo,
      albumId: parseInt(albumId),
      artistaId: parseInt(artistaId),
      capaAlbum: ''
    };

    return this.http.get(this.taURL + '/albums/' + albumId).pipe(
      switchMap((album: any) => {
        newMusica.capaAlbum = album.url_foto_album;
        console.log(newMusica.capaAlbum);
        return this.http.post(this.taURL + "/musicas", JSON.stringify(newMusica), {headers: this.headers, observe: "response"})
      }),
      map(res => {
        if (res.status === 201) {return musica;} else {return null;}
      })
    );
  }
  
  getMusicas(): Observable<Musica[]> {
    return this.http.get(this.taURL + "/musicas", {"observe": "body"})
      .pipe(map(res => res as Musica[]));
  }

  getMusicasByArtista(artistaId: string): Observable<Musica[]> {
    return this.http.get(this.taURL + '/musicas?artistaId=' + artistaId, {'observe': 'body'})
      .pipe(map(res => res as Musica[]));
  }

  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }
}