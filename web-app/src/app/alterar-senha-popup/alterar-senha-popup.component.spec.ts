import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarSenhaPopupComponent } from './alterar-senha-popup.component';

describe('AlterarSenhaPopupComponent', () => {
  let component: AlterarSenhaPopupComponent;
  let fixture: ComponentFixture<AlterarSenhaPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarSenhaPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarSenhaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
