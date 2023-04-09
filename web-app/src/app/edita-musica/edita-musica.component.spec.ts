import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaMusicaComponent } from './edita-musica.component';

describe('EditaMusicaComponent', () => {
  let component: EditaMusicaComponent;
  let fixture: ComponentFixture<EditaMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaMusicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
