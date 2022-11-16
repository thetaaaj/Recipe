import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router, TitleStrategy } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoading?: boolean;
  error: string = '';
  @ViewChild('f') authForm?: NgForm;
  constructor(private authService: AuthService) { }

  signUpMode: Boolean = true;

  ngOnInit(): void {
  }

  switchToLogin() {
    this.signUpMode = !this.signUpMode;
  }

  onSubmit() {
    this.isLoading = true;
    if (!this.authForm?.valid) {
      return;
    }
    if (this.signUpMode) {
      this.authService.signUp(this.authForm?.value.email, this.authForm?.value.password).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
        },
        error => {
          this.error = error.error.error.message;
          this.isLoading = false;
        }
      );
    }
    else {
      this.authService.signIn(this.authForm?.value.email, this.authForm?.value.password).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
        },
        error => {
          this.error = error.error.error.message;
          this.isLoading = false;
        }
      );
    }
    this.authForm.reset();
  }


}

