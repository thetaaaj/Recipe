import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from './auth/authResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  API_KEY = "AIzaSyBzQYOaguKsJc5oOlrXVc5se39hDhwtYcA";
  signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`;
  logInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`;

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>(this.signUpURL, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }

  signIn(email: string, password: string) {
    return this.http.post<AuthResponse>(this.logInURL, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }

}
