import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsCategoriaComponent } from './playlists-categoria.component';

describe('PlaylistsCategoriaComponent', () => {
  let component: PlaylistsCategoriaComponent;
  let fixture: ComponentFixture<PlaylistsCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistsCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistsCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
