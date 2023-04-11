import { Component } from '@angular/core';
import { ResultadoPesquisaService } from '../resultados-pesquisa/resultado-pesquisa.service';

@Component({
  selector: 'app-playlist-seguida',
  templateUrl: './playlist-seguida.component.html',
  styleUrls: ['./playlist-seguida.component.css']
})
export class PlaylistSeguidaComponent {
  constructor(private resultados: ResultadoPesquisaService){}

  pesquisar(){
    this.resultados.pesquisar()
  }
}