import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumAdminComponent } from './album-admin.component';

describe('AlbumAdminComponent', () => {
  let component: AlbumAdminComponent;
  let fixture: ComponentFixture<AlbumAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
