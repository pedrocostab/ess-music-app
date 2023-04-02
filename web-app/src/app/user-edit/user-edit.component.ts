import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  constructor(private service: AuthService) {
    this.Loadinfouser();
  }

  user: any;

  Loadinfouser(){
    this.user = this.service.Getbycode(sessionStorage.getItem('username')).subscribe(res=> {
      this.user = res;
    });
  }

}
