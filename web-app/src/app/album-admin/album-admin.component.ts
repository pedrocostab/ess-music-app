import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-admin',
  templateUrl: './album-admin.component.html',
  styleUrls: ['./album-admin.component.css']
})
export class AlbumAdminComponent {
  constructor(private route: ActivatedRoute) {}
  artistId: string = '';

  ngOnInit() {
    this.artistId = this.route.snapshot.params['id'];
  }
}
