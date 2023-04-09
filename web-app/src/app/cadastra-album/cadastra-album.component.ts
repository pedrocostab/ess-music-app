import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album/album';
import { CadastraAlbumService } from './cadastra-album.service';

@Component({
  selector: 'app-cadastra-album',
  templateUrl: './cadastra-album.component.html',
  styleUrls: ['./cadastra-album.component.css']
})

export class CadastraAlbumComponent implements OnInit {
  constructor(private cadastraAlbumService: CadastraAlbumService, private route: ActivatedRoute) {}
  artistId: string = '';
  album: Album = new Album();
  albums: Album[] = [];

  ngOnInit(): void {
    this.artistId = this.route.snapshot.params['id'];
  }

  createAlbum() {
    this.cadastraAlbumService.createAlbum(this.artistId, this.album)
      .subscribe({
        next: (result: Album | null) => {
          if (result) {
            this.albums.push(result);
            this.album = new Album();
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
  
  cancelCreateAlbum() {
    window.history.back();
  }
  
}