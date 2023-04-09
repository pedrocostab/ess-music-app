import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlaylistComponent } from './editar-playlist.component';

describe('EditarPlaylistComponent', () => {
  let component: EditarPlaylistComponent;
  let fixture: ComponentFixture<EditarPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
