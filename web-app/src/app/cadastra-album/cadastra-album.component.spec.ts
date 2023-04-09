import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraAlbumComponent } from './cadastra-album.component';

describe('CadastraAlbumComponent', () => {
  let component: CadastraAlbumComponent;
  let fixture: ComponentFixture<CadastraAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
