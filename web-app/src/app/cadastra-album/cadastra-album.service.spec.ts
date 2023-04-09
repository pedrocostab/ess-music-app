import { TestBed } from '@angular/core/testing';

import { CadastraAlbumService } from './cadastra-album.service';

describe('CadastraAlbumService', () => {
  let service: CadastraAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastraAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
