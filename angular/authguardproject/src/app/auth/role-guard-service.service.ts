import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardServiceService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // onn the data property
    const jwtHelper: JwtHelperService = new JwtHelperService();

    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem('token');
    const tokenRole = token ? jwtHelper.decodeToken(token).token : '';

    if (!this.auth.isAuthenticated() || tokenRole.role !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
