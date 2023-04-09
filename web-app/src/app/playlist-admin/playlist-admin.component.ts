import { Component } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist } from './playlist';

@Component({
  selector: 'app-playlist-admin',
  templateUrl: './playlist-admin.component.html',
  styleUrls: ['./playlist-admin.component.css']
})
export class PlaylistAdminComponent {
  constructor(private playlistService: PlaylistService, private route: ActivatedRoute, private router: Router){}
  id:number = 0;
  playlist: Playlist = new Playlist()

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.playlistService.getPlaylistById(String(this.id)).subscribe((playlist) => {
      this.playlist = playlist;
    });
  }

  editarPlaylist(playlistId: number) {
    this.router.navigate(['editar-playlist', playlistId]);
  }

  deletePlaylist(playlistId: number) {
    this.playlistService.deletePlaylist(String(playlistId))
  }
}
