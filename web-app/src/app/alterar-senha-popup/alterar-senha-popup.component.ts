import { Component, OnInit, inject, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alterar-senha-popup',
  templateUrl: './alterar-senha-popup.component.html',
  styleUrls: ['./alterar-senha-popup.component.css']
})
export class AlterarSenhaPopupComponent {
  constructor(private builder: FormBuilder, private service: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService,
    private dialog: MatDialogRef<AlterarSenhaPopupComponent>) {
  }
}
