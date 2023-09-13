import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  }

  error = {
    submitted: false,
    message: ''
  };

  submitted = false;

  constructor(public authService: AuthService, private router: Router) {
    this.error = {
      submitted: false,
      message: ''
    }
  }
  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['dashboard']);
    }

  }

  login() {
    this.submitted = true;
    this.error = {
      submitted: false,
      message: ''
    }

    this.authService.SignIn(this.credentials.email, this.credentials.password)
      .then((message) => {
        this.error.submitted = true;
        this.error.message = message;
        this.submitted = false;
        console.log("message", message);

      });

  }
}
