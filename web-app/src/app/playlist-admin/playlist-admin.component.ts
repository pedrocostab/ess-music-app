import { Component } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist } from './playlist';
import { ResultadoPesquisaService } from '../resultados-pesquisa/resultado-pesquisa.service';
import { Musica } from '../musicas/musica';
import { MusicaService } from '../musicas/musicas.service';

@Component({
  selector: 'app-playlist-admin',
  templateUrl: './playlist-admin.component.html',
  styleUrls: ['./playlist-admin.component.css']
})
export class PlaylistAdminComponent {
  constructor(private playlistService: PlaylistService, private route: ActivatedRoute, private router: Router, private resultados: ResultadoPesquisaService, private musicaService: MusicaService){}
  id:number = 0;
  playlist: Playlist = new Playlist()
  musicas: Musica[] = []

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.playlistService.getPlaylistById(String(this.id)).subscribe((playlist) => {
      this.playlist = playlist;
      this.musicas = this.playlist.musicas
    });
  }

  editarPlaylist(playlistId: number) {
    this.router.navigate(['editar-playlist', playlistId]);
  }

  deletePlaylist(playlistId: number) {
    this.playlistService.deletePlaylist(String(playlistId))
  }

  pesquisar(){
    this.resultados.pesquisar()
  }

  cadastraMusicaPlaylist(musicaId: number) {
    this.router.navigate(['adiciona-musica-playlist', musicaId]);
  }

  removerMusicaPlaylist(playlistId: number, musicaId: number){
    this.playlistService.deletaMusicaPlaylist(playlistId, musicaId)
    window.location.reload()
  }

  editarMusica(id: number): void {
    this.router.navigate(['editar-musica', id]);
  }

  irParaAlbum(albumId: Number) {
    this.router.navigate(['albumAdmin', String(albumId)]);
  }
}