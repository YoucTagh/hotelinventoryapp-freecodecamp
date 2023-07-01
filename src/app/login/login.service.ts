import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;

  isAdmin: boolean = false;
  constructor() {}

  login(email: string, password: string) {
    if (email === 'y@t' && password === 'admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if (email === 'y@t' && password === 'user') {
      this.isLoggedIn = true;
      this.isAdmin = false;
      console.log('We are here');
      
    }

    return this.isLoggedIn;
  }
}
