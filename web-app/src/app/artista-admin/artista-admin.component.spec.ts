import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaAdminComponent } from './artista-admin.component';

describe('ArtistaAdminComponent', () => {
  let component: ArtistaAdminComponent;
  let fixture: ComponentFixture<ArtistaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
