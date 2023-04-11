import { TestBed } from '@angular/core/testing';

import { ResultadoPesquisaService } from './resultado-pesquisa.service';

describe('ResultadoPesquisaService', () => {
  let service: ResultadoPesquisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadoPesquisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
