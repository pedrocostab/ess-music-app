import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tocador',
  templateUrl: './tocador.component.html',
  styleUrls: ['./tocador.component.css']
})

export class TocadorComponent {

  constructor(private http:HttpClient, private service: AuthService, private dialog: MatDialog) {


    this.user = this.service.GetbyCode(localStorage.getItem('username')).subscribe(res => {
      this.user = res;
    });
  }

  user:any;
  music: any;

  LoadinfoMusic() {
    this.music = this.service.GetMusicbyCode(localStorage.getItem('id')).subscribe(res => {
      this.music = res;
    });
  }
  

  tocar(musicaId: Number) {
      const historicoAntigo = this.user.historico || []; // Verifica se já existe um histórico. Caso não exista, usa um array vazio
      const historicoAtualizado = [musicaId, ...historicoAntigo]; // Adiciona o novo ID da música ao histórico antigo
      this.http.patch(`http://localhost:3000/user/${this.user.id}/`, {"historico" : historicoAtualizado}).subscribe();
      console.log({string:'Música ouvida'});
  }

  pausar() {
    // Código para pausar música
  }

  avancar(){
    // Código para avançar musica
  }
};