import { Component } from '@angular/core';
import { Artista } from '../artista/artista';
import { CadastraArtistaService } from '../cadastra-artista/cadastra-artista.service';

@Component({
  selector: 'app-visualizacao-admin-artistas',
  templateUrl: './visualizacao-admin-artistas.component.html',
  styleUrls: ['./visualizacao-admin-artistas.component.css']
})
export class VisualizacaoAdminArtistasComponent {
  artistas: Artista[] = [];
  filter: string = "";

  constructor(private artistaService: CadastraArtistaService) {}

  ngOnInit() {
    this.artistaService.getArtistas()
      .subscribe((artistas) => {
        this.artistas = artistas;
      });
  }
}
