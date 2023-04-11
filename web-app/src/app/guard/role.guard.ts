import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

    canActivate(): boolean {
        const userRole: string = this.authService.GetUserRole() ?? "";
        console.log(userRole);
        if (userRole === 'admin') {
            return true;
        } else {
            this.toastr.warning('Usuário não autorizado.');
            this.router.navigate(['/initial-page']);
            return false;
        }
    }

}
