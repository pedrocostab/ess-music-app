import { Component, OnInit } from '@angular/core';
import { Musica } from './musica';
import { MusicaService } from './musicas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})


export class MusicasComponent implements OnInit {
  constructor(private cadastraMusicaService: MusicaService, private route: ActivatedRoute, private router: Router) {}
  artistId: string = '';
  albumId: string = '';
  musica: Musica = new Musica();
  musicas: Musica[] = [];

  ngOnInit(): void {
    this.artistId = this.route.snapshot.params['artistaId'];
    this.albumId = this.route.snapshot.params['albumId'];
  }

  createMusica() {
    this.cadastraMusicaService.createMusica(this.artistId, this.albumId, this.musica)
      .subscribe({
        next: (result: Musica | null) => {
          if (result) {
            this.musicas.push(result);
            this.musica = new Musica();
          }
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {
          console.log("Fluxo de dados concluído.");
        }
      });
  }
  
  cancelCreateMusica() {
    window.history.back();
  }

}