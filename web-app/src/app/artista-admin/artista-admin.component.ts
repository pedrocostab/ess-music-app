import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CadastraAlbumService } from '../cadastra-album/cadastra-album.service';
import { MusicaService } from '../musicas/musicas.service';
import { Album } from '../album/album';
import { Musica } from '../musicas/musica';

@Component({
  selector: 'app-artista-admin',
  templateUrl: './artista-admin.component.html',
  styleUrls: ['./artista-admin.component.css']
})
export class ArtistaAdminComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cadastraAlbum: CadastraAlbumService, private musicaService: MusicaService) {}
  artistaId: string = '';
  artistaNome: string = '';
  artistaGeneroMusical: string = '';
  artistaUrlFoto: string = '';
  albums: Album[] =  [];
  musicas: Musica[] = [];
  i: number = 0;

  ngOnInit(): void {
    this.artistaId = this.route.snapshot.params['id'];
    this.artistaNome = this.route.snapshot.params['nome'];
    this.artistaGeneroMusical = this.route.snapshot.params['genero_musical'];
    this.artistaUrlFoto = this.route.snapshot.params['url_foto_artista'];

    this.cadastraAlbum.getAlbumsByArtista(this.artistaId).subscribe(albums => {
      this.albums = albums;
    });

    this.musicaService.getMusicasByArtista(this.artistaId).subscribe(musicas => {
      this.musicas = musicas;
    });
  }

}
