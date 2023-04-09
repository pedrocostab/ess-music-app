import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsCategoriaAdminComponent } from './playlists-categoria-admin.component';

describe('PlaylistsCategoriaAdminComponent', () => {
  let component: PlaylistsCategoriaAdminComponent;
  let fixture: ComponentFixture<PlaylistsCategoriaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistsCategoriaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistsCategoriaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
