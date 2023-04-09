import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPlaylistComponent } from './cadastra-playlist.component';

describe('CadastraPlaylistComponent', () => {
  let component: CadastraPlaylistComponent;
  let fixture: ComponentFixture<CadastraPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
