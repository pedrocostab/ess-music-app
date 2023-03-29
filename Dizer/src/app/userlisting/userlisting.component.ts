import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {

  constructor(private service: AuthService) {

  }

  userlist: any;

  Loaduser() {
    this.service.GetAll().subscribe(res => {
      this.userlist = res;
    });
  }

}
