import { TestBed } from '@angular/core/testing';

import { CadastraArtistaService } from './cadastra-artista.service';

describe('CadastraArtistaService', () => {
  let service: CadastraArtistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastraArtistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
