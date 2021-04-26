import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;

  public userSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  login(username: string, password: string): boolean {
    if (username == 'admin' && password == 'admin') {
      this.isLoggedIn = true;
    }
    this.userSubject.next(this.isLoggedIn);
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userSubject.next(this.isLoggedIn);
  }
}
