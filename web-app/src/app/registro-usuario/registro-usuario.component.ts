import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router) {

  }


  registerform=this.builder.group({
    id:this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name:this.builder.control('', Validators.required),
    password:this.builder.control('', Validators.compose([Validators.required, Validators.minLength(6)])),
    email:this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender:this.builder.control('male'),
    role:this.builder.control(''),
    isactive:this.builder.control(false)
  })

  proceedregister() {
    if (this.registerform.valid) {
 
    } else {
      console.error('Por favor, insira uma senha com no mínimo 6 caracteres')
    }
  }
  
  ngOnInit() {
  }

}
