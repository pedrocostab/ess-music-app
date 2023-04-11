import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaPlaylistsComponent } from './categoria-playlists.component';

describe('CategoriaPlaylistsComponent', () => {
  let component: CategoriaPlaylistsComponent;
  let fixture: ComponentFixture<CategoriaPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaPlaylistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
