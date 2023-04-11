import { Component } from '@angular/core';
import { ResultadoPesquisaService } from '../resultados-pesquisa/resultado-pesquisa.service';

@Component({
  selector: 'app-playlist-user',
  templateUrl: './playlist-user.component.html',
  styleUrls: ['./playlist-user.component.css']
})
export class PlaylistUserComponent {
  constructor(private resultados: ResultadoPesquisaService){}

  pesquisar(){
    this.resultados.pesquisar()
  }
}