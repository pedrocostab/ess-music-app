// Importe as dependências necessárias
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Album } from "../album/album"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CadastraAlbumService {
  private taURL = 'http://localhost:3000';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient) { }

  createAlbum(artistId: string, album: any): Observable<any | null>{
    const newAlbum = {
      id: parseInt(album.id),
      nome: album.nome,
      ano_lancamento: parseInt(album.ano_lancamento),
      url_foto_album: album.url_foto_album,
      artistaId: parseInt(artistId),
      artistaNome: ''
    };

    return this.http.get(this.taURL + '/artistas/' + artistId).pipe(
      switchMap((artista: any) => {
        newAlbum.artistaId = artista.id;
        newAlbum.artistaNome = artista.nome;
        return this.http.post(this.taURL + "/albums", JSON.stringify(newAlbum), {headers: this.headers, observe: "response"})
      })
    );
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get(this.taURL + "/albums", {"observe": "body"})
             .pipe(map(res => res as Album[]));
  }

  getAlbumById(albumId: number): Observable<Album> {
    return this.http.get(this.taURL + "/albums/" + albumId, {"observe": "body"})
             .pipe(map(res => res as Album));
  }

  getAlbumsByArtista(artistaId: string): Observable<Album[]> {
    return this.http.get(this.taURL + '/albums?artistaId=' + artistaId, {'observe': 'body'})
      .pipe(map(res => res as Album[]));
  }

  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }
}