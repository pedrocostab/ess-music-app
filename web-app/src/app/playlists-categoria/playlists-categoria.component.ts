import { Component } from '@angular/core';
import { ResultadoPesquisaService } from '../resultados-pesquisa/resultado-pesquisa.service';

@Component({
  selector: 'app-playlist-categoria',
  templateUrl: './playlist-categoria.component.html',
  styleUrls: ['./playlist-categoria.component.css']
})
export class PlaylistCategoriaComponent {
 constructor(private resultados: ResultadoPesquisaService){}

 pesquisar(){
  this.resultados.pesquisar()
}
}