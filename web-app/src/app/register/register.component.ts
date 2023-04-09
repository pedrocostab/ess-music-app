import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import * as bcrypt from 'bcryptjs';

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}
export function comparePasswords(password: string, hashedPassword: string) {
  return bcrypt.compareSync(password, hashedPassword)
}


function findEmailInJson(json: any[], email: string): boolean {
  for (let i = 0; i < json.length; i++) {
    const item = json[i];
    if (item.email === email) {
      return true;
    }
  }
  return false;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService, private router: Router) {

  }

  registerform = this.builder.group({
    id: this.builder.control('', Validators.required),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(6)])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    role: this.builder.control('user'),
    isactive: this.builder.control(true)
  });
  userlist: any;
  hashedPassword: any;

  proceedregistration() {

    //Registro com sucesso
    if (this.registerform.valid) {
      this.service.GetAll().subscribe(async res => {
        this.userlist = res

        const emailRegistered = findEmailInJson(this.userlist, this.registerform.value.email ?? "")

        if (!emailRegistered) {
          this.registerform.value.password = await hashPassword(this.registerform.value.password ?? "")
          this.service.Proceedregister(this.registerform.value).subscribe(res => {
            this.toastr.success('Registro feito com sucesso!');
            this.router.navigate(['login'])
          })
        }
        else {
          this.toastr.warning('E-mail já cadastrado.')
          console.log('E-mail já cadastrado.')
        }
      });
    }
    //Falha no registro
    else {
      this.toastr.warning('Por favor, colocar um dado válido!')
    }
  }

}
