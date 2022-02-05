import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated(): boolean {
    let jwtHelper: JwtHelperService = new JwtHelperService();

    const token = localStorage.getItem('token');
    return !jwtHelper.isTokenExpired(token?.toString());
  }
}
