import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private service: AuthService, private dialog: MatDialog) {
    this.Loadinfouser();
  }

  user: any;

  Loadinfouser() {
    this.user = this.service.GetbyCode(localStorage.getItem('username')).subscribe(res => {
      this.user = res;
    });
  }

}
