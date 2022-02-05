import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated(): boolean {
    let jwtHelper: JwtHelperService = new JwtHelperService();
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJhdXRoZW50aWNhdGVkIjp0cnVlfQ.AmH3iRfJa1Ynq79oS1IiRYyKtxTjlUS94iPp00yBqkk'
    );
    const token = localStorage.getItem('token');
    return token
      ? jwtHelper.decodeToken(token.toString()).authenticated
      : false;
  }
}
