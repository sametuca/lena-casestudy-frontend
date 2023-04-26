import { Component } from '@angular/core';
import { LoginService } from '../auth/login.service';
import { LoginViewModel } from '../models/LoginViewModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: LoginViewModel = new LoginViewModel();
  errorMessage: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  login(): void {
    this.loginService.login(this.model)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/form']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
        }
      );
  }
}
