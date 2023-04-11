import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TocadorComponent } from './tocador.component';

describe('TocadorComponent', () => {
  let component: TocadorComponent;
  let fixture: ComponentFixture<TocadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TocadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TocadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
