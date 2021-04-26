import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserAuthenticated: boolean = false;
  username: string = '';
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.authService.userSubject.subscribe((val) => {
      this.isUserAuthenticated = val;
      this.username = 'admin';
    });
  }

  ngOnInit(): void {}

  displayLandingPage() {
    this.router.navigate(['landing']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
    this.isUserAuthenticated = false;
    this.username = '';
  }
}
