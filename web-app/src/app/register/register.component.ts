import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import * as bcrypt from 'bcryptjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) { }

  registerForm = this.builder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    role: ['user'],
    isactive: [true]
  });

  userlist: any;
  subscription: Subscription = new Subscription();

  async proceedRegistration() {

    // Registro com sucesso
    if (this.registerForm.valid) {
      this.subscription.add(this.service.GetAll().subscribe(async res => {
        this.userlist = res;

        const emailRegistered = this.isEmailRegistered(this.userlist, this.registerForm.value.email ?? '');

        if (!emailRegistered) {
          try {
            this.registerForm.value.password = await bcrypt.hash(this.registerForm.value.password ?? '', 10);
            this.subscription.add(this.service.Proceedregister(this.registerForm.value).subscribe(() => {
              this.toastr.success('Registro feito com sucesso!');
              this.router.navigate(['login']);
            }));
          } catch (error) {
            this.toastr.error('Erro ao criar o hash da senha!');
            console.error('Erro ao criar o hash da senha:', error);
          }
        } else {
          this.toastr.warning('E-mail já cadastrado.');
          console.log('E-mail já cadastrado.');
        }
      }));
    }
    // Falha no registro
    else {
      this.toastr.warning('Por favor, colocar um dado válido!');
    }
  }

  isEmailRegistered(json: any[], email: string): boolean {
    return json.find(item => item.email === email) !== undefined;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
