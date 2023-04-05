import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UserSeDeletapopupComponent } from '../user-se-deletapopup/user-se-deletapopup.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  constructor(private service: AuthService, private dialog:MatDialog) {
    this.Loadinfouser();
  }

  user: any;

  Loadinfouser(){
    this.user = this.service.Getbycode(sessionStorage.getItem('username')).subscribe(res=> {
      this.user = res;
    });
  }

  UserSeDeleta(code: any) {
    const codeId = code
    const popup = this.dialog.open(UserSeDeletapopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data:{
        usercode:code
      }
    })
    popup.afterClosed().subscribe(res=>{
      this.service.deletarUsuario(codeId);
      window.location.replace('');
    });
  }

}
