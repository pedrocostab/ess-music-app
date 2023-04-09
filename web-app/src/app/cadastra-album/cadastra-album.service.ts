// Importe as dependências necessárias
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Album } from "../album/album"
import { Injectable } from '@angular/core';
import { Musica } from '../musicas/musica';

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

  deleteAlbumById(albumId: string): Observable<any> {
    return this.http.get<Musica[]>(this.taURL + '/musicas?albumId=' + albumId).pipe(
      switchMap((musicas: Musica[]) => {
        if (musicas.length === 0) {
          // Se não houver músicas, exclui o álbum diretamente
          return this.http.delete(this.taURL + '/albums/' + albumId);
        } else {
          // Se houver músicas, exclui cada música e depois o álbum
          const deleteMusicasObservables = musicas.map(musica =>
            this.http.delete(this.taURL + '/musicas/' + musica.id)
          );
          // Usa forkJoin para aguardar a exclusão de todas as músicas antes de excluir o álbum
          return forkJoin(deleteMusicasObservables).pipe(
            switchMap(() => this.http.delete(this.taURL + '/albums/' + albumId))
          );
        }
      })
    );
  }  

  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }
}