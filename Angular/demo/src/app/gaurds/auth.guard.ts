import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';


@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private authService: UserAuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.authService.isUserLogged) {
        return true;
      } 
      else {
        window.alert('You Must Login First!!');
        this.router.navigate(['/login']);
        return false;
      }
  }
}
