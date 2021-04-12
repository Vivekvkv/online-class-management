import { Injectable } from '@angular/core';
import { Router , CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@app/_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private accountService: AuthService
) {}
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const user = this.accountService.userValue;
      if (user) {
          // authorised so return true
          return true;
    }
    this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
    return false;

  }
  
}
