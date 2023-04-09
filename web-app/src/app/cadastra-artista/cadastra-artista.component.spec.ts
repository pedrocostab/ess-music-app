import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraArtistaComponent } from './cadastra-artista.component';

describe('CadastraArtistaComponent', () => {
  let component: CadastraArtistaComponent;
  let fixture: ComponentFixture<CadastraArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraArtistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
