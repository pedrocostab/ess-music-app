import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        const userRole: string = this.authService.GetUserRole() ?? "";
        console.log(userRole);
        if (userRole === 'admin') {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}
