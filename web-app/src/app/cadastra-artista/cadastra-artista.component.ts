import { Component } from '@angular/core';
import { CadastraArtistaService } from './cadastra-artista.service';
import { Artista } from '../artista/artista';

@Component({
  selector: 'app-cadastra-artista',
  templateUrl: './cadastra-artista.component.html',
  styleUrls: ['./cadastra-artista.component.css']
})
export class CadastraArtistaComponent {
  constructor(private cadastraArtistaService: CadastraArtistaService) {}

  artista: Artista = new Artista();
  artistas: Artista[] = [];

  createArtista(c: Artista): void {
     this.cadastraArtistaService.create(c)
     .subscribe(result => {
           if (result) {
              this.artistas.push(<Artista> result);
              this.artista = new Artista();
           }
        });
  }

  ngOnInit(): void {}

}