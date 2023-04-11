import { Component } from '@angular/core';
import { Categoria } from './categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})

export class CriarCategoriaComponent {
  constructor(private http: HttpClient) { }
  categoria: Categoria = new Categoria();
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  createCategoria() {
    const newCategoria = {
      id: this.categoria.id,
      titulo: this.categoria.titulo,
    };

    return this.http.post(this.taURL + "/categorias", JSON.stringify(newCategoria), {headers: this.headers, observe: "response"}).subscribe(
      res => {
        if (res.status === 201) {return this.categoria;} else {return null;}
      }
    )
  }
  
  cancelCreateCategoria() {
    window.history.back();
  }
}
