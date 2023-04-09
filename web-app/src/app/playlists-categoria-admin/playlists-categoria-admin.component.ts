import { Component } from '@angular/core';
import { PlaylistService } from '../playlist-admin/playlist.service';
import { Playlist } from '../playlist-admin/playlist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlists-categoria-admin',
  templateUrl: './playlists-categoria-admin.component.html',
  styleUrls: ['./playlists-categoria-admin.component.css']
})
export class PlaylistsCategoriaAdminComponent {
  constructor(private playlistService: PlaylistService, private router: Router) {}
  playlists: Playlist[] = [];

  ngOnInit() {
    this.playlistService.getPlaylists()
    .subscribe((playlists) => {
      this.playlists = playlists;
    });
  }

  redirecionaTelaPlaylist(playlistId: number) {
    this.router.navigate(['/playlistAdmin',String(playlistId)]);
  }
}
