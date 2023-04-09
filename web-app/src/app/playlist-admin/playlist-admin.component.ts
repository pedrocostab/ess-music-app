import { Component } from '@angular/core';
import { PlaylistService } from './playlist.service';

@Component({
  selector: 'app-playlist-admin',
  templateUrl: './playlist-admin.component.html',
  styleUrls: ['./playlist-admin.component.css']
})
export class PlaylistAdminComponent {
  constructor(private playlistService: PlaylistService){}

  ngOnInit(): void {}
}
