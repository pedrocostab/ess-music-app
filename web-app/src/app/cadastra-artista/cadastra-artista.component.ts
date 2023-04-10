import { Component } from '@angular/core';
import { CadastraArtistaService } from './cadastra-artista.service';
import { Artista } from '../artista/artista';
import { Categoria } from '../criar-categoria/categoria';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastra-artista',
  templateUrl: './cadastra-artista.component.html',
  styleUrls: ['./cadastra-artista.component.css']
})
export class CadastraArtistaComponent {
  constructor(private cadastraArtistaService: CadastraArtistaService, private http: HttpClient) {}
  artista: Artista = new Artista();
  artistas: Artista[] = [];
  categorias: Categoria[] = [];
  categoriasSelecionadas: Categoria[] = [];

  createArtista(c: Artista): void {
     this.cadastraArtistaService.create(c)
     .subscribe(result => {
           if (result) {
              this.artistas.push(<Artista> result);
              this.artista = new Artista();
           }
        });
  }

  cancelCreateArtista() {
    window.history.back();
  }
  
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/categorias').subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error) => {
        console.error('Erro ao carregar categorias:', error);
      }
    );
  }

}