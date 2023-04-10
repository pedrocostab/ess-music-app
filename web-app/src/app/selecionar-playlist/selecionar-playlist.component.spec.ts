import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarPlaylistComponent } from './selecionar-playlist.component';

describe('SelecionarPlaylistComponent', () => {
  let component: SelecionarPlaylistComponent;
  let fixture: ComponentFixture<SelecionarPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
