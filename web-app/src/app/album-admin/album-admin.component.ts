import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Musica } from '../musicas/musica';
import { MusicaService } from '../musicas/musicas.service';
import { Album } from '../album/album';
import { CadastraAlbumService } from '../cadastra-album/cadastra-album.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-album-admin',
  templateUrl: './album-admin.component.html',
  styleUrls: ['./album-admin.component.css']
})
export class AlbumAdminComponent {
  constructor(private route: ActivatedRoute, private musicaService: MusicaService, private albumService: CadastraAlbumService, private router: Router) {}
  albumId: string = '';
  album: Album = new Album;
  musicas: Musica[] = [];

  ngOnInit() {
    this.albumId = this.route.snapshot.params['id'];

    this.albumService.getAlbumById(parseInt(this.albumId)).subscribe(album => {
      this.album = album;
    });

    this.musicaService.getMusicasByAlbum(this.albumId).subscribe(musicas => {
      this.musicas = musicas;
    });
  }

  cadastrarMusicas() {
    this.router.navigate(['albumAdmin', this.albumId, 'cadastrar-musica']);
  }

  removerAlbum() {
    this.albumService.deleteAlbumById(this.albumId).subscribe(() => {
      this.router.navigate(['visualizar-artistas-admin']);
    });
  }
  
  editarAlbum(id: number): void {
    this.router.navigate(['editar-album', id]);
  }

  removerMusica(musicaId: Number) {
    this.musicaService.deleteMusicaById(String(musicaId))
    window.location.reload();
  }
  

  editarMusica(id: number): void {
    this.router.navigate(['editar-musica', id]);
  }
}
