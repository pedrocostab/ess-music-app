import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Artista } from '../artista/artista';
import { Album } from '../album/album';
import { Musica } from '../musicas/musica';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadoPesquisaService {

  constructor(private router: Router, private service: AuthService, private http: HttpClient) {}

  artistas: Artista[] = [];
  albuns: Album[] = [];
  musicas: Musica[] = [];

  private taURL = 'http://localhost:3000';
  
  pesquisar(){
    const consulta = (<HTMLInputElement>document.getElementById("pesquisar-coisas")).value.toLowerCase();
    let artistasFiltrados: Artista[] = [];
    let albunsFiltrados: Album[] = [];
    let musicasFiltradas: Musica[] = [];
  
    combineLatest([
      this.http.get<Artista[]>(`${this.taURL}/artistas`),
      this.http.get<Album[]>(`${this.taURL}/albums`),
      this.http.get<Musica[]>(`${this.taURL}/musicas`)
    ]).subscribe(
      ([artistas, albuns, musicas]) => {
        // Filtrar artistas por nome
        artistasFiltrados = artistas.filter(a =>
          a.nome.toLowerCase().includes(consulta.toLowerCase()) || a.nome.toLowerCase().includes(consulta.toLowerCase())
        );
  
        // Filtrar álbuns por nome e artista
        albunsFiltrados = albuns.filter(a =>
          a.nome.toLowerCase().includes(consulta.toLowerCase()) || a.artistaNome.toLowerCase().includes(consulta.toLowerCase())
        );
  
        // Filtrar músicas por título e artista/álbum
        musicasFiltradas = musicas.filter(m =>
          m.titulo.toLowerCase().includes(consulta.toLowerCase()) || m.artistaNome.toLowerCase().includes(consulta.toLowerCase()) || m.tituloAlbum.toLowerCase().includes(consulta.toLowerCase())
        );
  
        // Atualizar os resultados na tela
        this.artistas = artistasFiltrados;
        this.albuns = albunsFiltrados;
        this.musicas = musicasFiltradas;
        
        this.router.navigate(['resultadosPesquisa']);
      },
      error => console.error('Erro ao buscar registros:', error)
    );
  }

  retornaResultadosPesquisa() {
    return this.artistas, this.albuns, this.musicas
  }
}