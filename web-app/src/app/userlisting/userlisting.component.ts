import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { EditpopupComponent } from '../editpopup/editpopup.component';
import { AddpopupComponent } from '../addpopup/addpopup.component';
import { DeletepopupComponent } from '../deletepopup/deletepopup.component';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {

  constructor(private service: AuthService, private dialog:MatDialog) {
    this.Loaduser();
  }

  userlist: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;


  Loaduser() {
    this.service.GetAll().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  displayedColumns: string[] = ['username', 'name', 'email', 'role', 'status', 'action', 'add'];

  UpdateUser(code: any) {
    const popup = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data:{
        usercode:code
      }
    })
    popup.afterClosed().subscribe(res=>{
      this.Loaduser();
    });
  }

  
  UpdateUser2(code: any) {
    const popup = this.dialog.open(EditpopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data:{
        usercode:code
      }
    })
    popup.afterClosed().subscribe(res=>{
      this.Loaduser();
    });
  }

  RemoveUser(code: any) {
    const codeId = code
    const popup = this.dialog.open(DeletepopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data:{
        usercode:code
      }
    })
    popup.afterClosed().subscribe(res=>{
      this.service.deletarUsuario(codeId);
    });
  }
  
  AddUser(code: any) {
    const popup = this.dialog.open(AddpopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data:{
        usercode:code
      }
    })
    popup.afterClosed().subscribe(res=>{
      this.Loaduser();
    });
  }

    opendialog(){

    }
}
