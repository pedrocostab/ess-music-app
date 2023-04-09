import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAlbumComponent } from './edita-album.component';

describe('EditaAlbumComponent', () => {
  let component: EditaAlbumComponent;
  let fixture: ComponentFixture<EditaAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
