import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist-admin/playlist.service';
import { Playlist } from '../playlist-admin/playlist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-playlist',
  templateUrl: './cadastra-playlist.component.html',
  styleUrls: ['./cadastra-playlist.component.css']
})

export class CadastraPlaylistComponent implements OnInit {
  constructor(private playlistService: PlaylistService, private router: Router) {}
  playlist: Playlist = new Playlist();
  
  cadastraPlaylist() {
    this.playlistService.createPlaylist(this.playlist)
    .subscribe({
      next: (result: Playlist | null) => {
        if (result) {
          this.playlist = new Playlist();
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

  ngOnInit(){}

  cancelarCadastrarPlaylist() {
    window.history.back()
  }
}
