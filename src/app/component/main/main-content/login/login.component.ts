import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemePalette } from '@angular/material/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CountryMapComponent } from '../country-map/country-map.component';
import { AuthenticationService } from 'src/app/service/authentication.service';

export interface SignupButton {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  availableButtons: SignupButton[] = [
    { name: 'Login with Google', color: 'primary' },
    { name: 'Login with Facebook', color: 'accent' },
    { name: 'Login with Instagram', color: 'warn' },
  ];

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private authService: AuthenticationService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let loginData: any = this.loginForm.value;
    if (this.authService.login(loginData.username, loginData.password)) {
      this.router.navigate(['landing']);
    } else {
      this.openSnackBar('invalid login.', 'close');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
