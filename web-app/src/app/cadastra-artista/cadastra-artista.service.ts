import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { Artista } from '../artista/artista';
import { Musica } from '../musicas/musica';
import { Album } from '../album/album';

@Injectable({
  providedIn: 'root'
})
export class CadastraArtistaService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

    create(artista: Artista): Observable<Artista|null> {
    return this.http.post(this.taURL + "/artistas",JSON.stringify(artista), {headers: this.headers, observe: "response"})
      .pipe(map(res => {
        if (res.status === 201) {return artista;} else {return null;}
      }));
  }

  getArtistas(): Observable<Artista[]> {
    return this.http.get(this.taURL + "/artistas", {"observe": "body"})
      .pipe(map(res => res as Artista[]));
  }

  getArtistaById(artistaId: String): Observable<Artista> {
    return this.http.get(this.taURL + '/artistas/' + artistaId, {"observe": "body"})
      .pipe(map(res => res as Artista));
  }

  deleteArtistaById(artistaId: string) {
    return this.http.get<Album[]>(this.taURL + '/albums?artistaId=' + artistaId).pipe(
      switchMap((albums: Album[]) => {
        if (albums.length === 0) {
          // Se não houver albums consequentemente não há músicas, então, exclui o artista diretamente
          return this.http.delete(this.taURL + '/artistas/' + artistaId);
        } else {
          return this.http.get<Musica[]>(this.taURL + '/musicas?artistaId=' + artistaId).pipe(
            switchMap((musicas: Musica[]) => {
              if (musicas.length === 0) {
                // Se não houver músicas, exclui o álbum diretamente
                const deleteAlbumObservables = albums.map(album =>
                  this.http.delete(this.taURL + '/albums/' + album.id)
                );
                // Usa forkJoin para aguardar a exclusão de todos os álbuns antes de excluir o artista
                return forkJoin(deleteAlbumObservables).pipe(
                  switchMap(() => this.http.delete(this.taURL + '/artistas/' + artistaId))
                );
              } else {
                // Se houver músicas, exclui cada música e depois cada álbum, e finalmente o artista
                const deleteMusicasObservables = musicas.map(musica =>
                  this.http.delete(this.taURL + '/musicas/' + musica.id)
                );
                const deleteAlbumObservables = albums.map(album =>
                  this.http.delete(this.taURL + '/albums/' + album.id)
                );
                // Usa forkJoin para aguardar a exclusão de todas as músicas e álbuns antes de excluir o artista
                return forkJoin(deleteMusicasObservables.concat(deleteAlbumObservables)).pipe(
                  switchMap(() => this.http.delete(this.taURL + '/artistas/' + artistaId))
                );
              }
            })
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