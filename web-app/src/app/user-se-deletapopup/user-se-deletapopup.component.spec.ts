import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSeDeletapopupComponent } from './user-se-deletapopup.component';

describe('UserSeDeletapopupComponent', () => {
  let component: UserSeDeletapopupComponent;
  let fixture: ComponentFixture<UserSeDeletapopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSeDeletapopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSeDeletapopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
