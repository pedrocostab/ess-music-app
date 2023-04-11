import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-tocador',
  templateUrl: './tocador.component.html',
  styleUrls: ['./tocador.component.css']
})

export class TocadorComponent {
  tocar(musicaId: Number, userId: String) {
    //axios.get(`/user/${userId}`)
    axios.patch(`/user/${userId}`, {"historico" : [musicaId]}) //adiciona o id da música ouvida no histórico
      .then(response => {
        console.log(response.data); // exibe a resposta do servidor
      })
      .catch(error => {
        console.error(error); // exibe o erro, caso ocorra
      });
  }

  pausar() {
    // Código para pausar música
  }

  avancar(){
    // Código para avançar musica
  }
}