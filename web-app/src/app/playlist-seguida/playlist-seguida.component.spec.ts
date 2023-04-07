import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSeguidaComponent } from './playlist-seguida.component';

describe('PlaylistSeguidaComponent', () => {
  let component: PlaylistSeguidaComponent;
  let fixture: ComponentFixture<PlaylistSeguidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistSeguidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistSeguidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
