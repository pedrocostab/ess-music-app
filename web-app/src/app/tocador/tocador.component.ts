import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import axios from 'axios';

@Component({
  selector: 'app-tocador',
  templateUrl: './tocador.component.html',
  styleUrls: ['./tocador.component.css']
})

export class TocadorComponent {

  apiurl='http://localhost:3000'
  constructor(private http:HttpClient) { }

  tocar(musicaId: Number, userId: String) {

    
    let response = this.http.patch(`http://localhost:3000/user/${userId}/`, {"historico" : [musicaId]}).subscribe();
    console.log(response);
    
    //axios.get(`/user/${userId}`)
    //adiciona o id da música ouvida no histórico
      // .then(response => {
      //   console.log(response.data); // exibe a resposta do servidor
      // })
      // .catch(error => {
      //   console.error(error); // exibe o erro, caso ocorra
      // });
  }

  pausar() {
    // Código para pausar música
  }

  avancar(){
    // Código para avançar musica
  }
}