import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoAdminArtistasComponent } from './visualizacao-admin-artistas.component';

describe('VisualizacaoAdminArtistasComponent', () => {
  let component: VisualizacaoAdminArtistasComponent;
  let fixture: ComponentFixture<VisualizacaoAdminArtistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacaoAdminArtistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacaoAdminArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
