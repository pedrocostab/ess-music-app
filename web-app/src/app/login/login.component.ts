import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService,
    private service: AuthService, private router: Router) {
    sessionStorage.clear();
  }

  userdata: any;

  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  })

  async proceedlogin() {
    const username = (document.querySelector('#username') as HTMLInputElement).value;
    const password = (document.querySelector('#password') as HTMLInputElement).value;

    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: username, password: password })
    });

    if (response.ok) {
      const result = await response.text();
      //console.log(result);
    } else {
      const error = await response.text();
      //console.log(error);
    }
  }
}