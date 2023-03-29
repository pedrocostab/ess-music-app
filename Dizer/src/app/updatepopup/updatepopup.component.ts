import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {

  constructor(private builder:FormBuilder, private service:AuthService){

  }

  ngOnInit(): void {
    this.service.GetAllRole().subscribe(res=>{
      this.rolelist=res;
    })
  }
  rolelist:any;

  registerform=this.builder.group({
    id:this.builder.control(''),
    name:this.builder.control(''),
    password:this.builder.control(''),
    email:this.builder.control(''),
    gender:this.builder.control(''),
    role:this.builder.control('', Validators.required),
    isactive:this.builder.control(false)
  });
  
  updateuser(){

  }
}
