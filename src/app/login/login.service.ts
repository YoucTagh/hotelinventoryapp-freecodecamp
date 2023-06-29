import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;

  constructor() {}

  login(email: string, password: string) {
    if (email == 'y@t' && password == 'admin') {
      this.isLoggedIn = true;
    }

    return this.isLoggedIn;
  }
}
