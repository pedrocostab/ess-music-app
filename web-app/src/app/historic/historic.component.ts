import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css'],
})
export class HistoricComponent {
  
  constructor(private service: AuthService, private dialog: MatDialog, private http:HttpClient) {
    this.Loadinfouser();
  }

user: any;

  Loadinfouser() {
    this.user = this.service.GetbyCode(localStorage.getItem('username')).subscribe(res => {
      this.user = res;
    });
  }

  limparHistorico(){
    this.http.patch(`http://localhost:3000/user/${this.user.id}/`, {"historico" : []}).subscribe;
    console.log("teste 1")
  }
}