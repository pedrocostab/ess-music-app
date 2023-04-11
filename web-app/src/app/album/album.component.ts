import { Component } from '@angular/core';
import { MusicaService } from '../musicas/musicas.service';
import { Musica } from '../musicas/musica';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  constructor(private musicaService: MusicaService, private router: Router){}
  musicas: Musica[] = []

  ngOnInit(){
    this.musicaService.getMusicas().subscribe(musicas => {
      this.musicas = musicas
    })
  }

  cadastraMusicaPlaylist(musicaId: number) {
    this.router.navigate(['adiciona-musica-playlist', musicaId]);
  }
}
