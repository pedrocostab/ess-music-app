import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Artista } from '../artista/artista';

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

  getArtistaById(artista: Artista): Observable<Artista|null> {
    return this.http.get(this.taURL + '/artistas/' + artista.id)
      .pipe(map(res => {
        if (res === 200) { return artista} else {return null}
      }))
  }

  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }
}