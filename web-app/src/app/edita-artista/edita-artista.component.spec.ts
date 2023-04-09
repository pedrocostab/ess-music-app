import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaArtistaComponent } from './edita-artista.component';

describe('EditaArtistaComponent', () => {
  let component: EditaArtistaComponent;
  let fixture: ComponentFixture<EditaArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaArtistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
