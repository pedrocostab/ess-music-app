import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artista } from '../artista/artista';
import { Album } from '../album/album';
import { Musica } from '../musicas/musica';
import { ResultadoPesquisaService } from './resultado-pesquisa.service';

@Component({
  selector: 'app-resultados-pesquisa',
  templateUrl: './resultados-pesquisa.component.html',
  styleUrls: ['./resultados-pesquisa.component.css']
})
export class ResultadosPesquisaComponent {
  artistas: Artista[] = []
  albuns: Album[] = []
  musicas: Musica[] = []
  constructor(private route: ActivatedRoute, private resultadosService: ResultadoPesquisaService){}

  ngOnInit(){
    this.artistas = this.resultadosService.artistas
    this.albuns = this.resultadosService.albuns
    this.musicas = this.resultadosService.musicas

    console.log(this.artistas, this.albuns, this.musicas)
  }
}