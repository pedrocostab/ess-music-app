import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tocador',
  templateUrl: './tocador.component.html',
  styleUrls: ['./tocador.component.css']
})

export class TocadorComponent {

  apiurl='http://localhost:3000'
  constructor(private http:HttpClient) { }

  tocar(musicaId: Number, userId: String) {
    this.http.patch(`http://localhost:3000/user/${userId}/`, {"historico" : [musicaId]}).subscribe();    
  }

  pausar() {
    // Código para pausar música
  }

  avancar(){
    // Código para avançar musica
  }
}