import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastraAlbumService } from '../cadastra-album/cadastra-album.service';
import { MusicaService } from '../musicas/musicas.service';
import { Album } from '../album/album';
import { Musica } from '../musicas/musica';
import { CadastraArtistaService } from '../cadastra-artista/cadastra-artista.service';

@Component({
  selector: 'app-artista-admin',
  templateUrl: './artista-admin.component.html',
  styleUrls: ['./artista-admin.component.css']
})
export class ArtistaAdminComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cadastraAlbum: CadastraAlbumService, private musicaService: MusicaService, private router: Router, private artistaService: CadastraArtistaService) {}
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

  cadastrarAlbum() {
    this.router.navigate(['visualizar-artistas-admin', this.artistaId, 'cadastrar-album']);
  }

  visualizarAlbum(albumId: Number) {
    this.router.navigate(['albumAdmin', String(albumId)]);
  }

  removerMusica(musicaId: Number) {
    this.musicaService.deleteMusicaById(String(musicaId))
    window.location.reload();
  }
  
  deletarArtista() {
    this.artistaService.deleteArtistaById(this.artistaId).subscribe(() => {
      this.router.navigate(['visualizar-artistas-admin']);
    });
  }

  editarMusica(id: number): void {
    this.router.navigate(['editar-musica', id]);
  }

  editarArtista(artistaId: string) {
    this.router.navigate(['editar-artista', artistaId])
  }
}
