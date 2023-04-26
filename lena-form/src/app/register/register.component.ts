import { Component } from '@angular/core';
import { RegisterViewModel } from '../models/RegisterViewModel';
import { RegisterService } from '../auth/register.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  model: RegisterViewModel = new RegisterViewModel();
  errorMessage: "string" | undefined;

  constructor(private registerService: RegisterService) { }

  register(): void {
    this.registerService.register(this.model)
      .pipe(
        catchError((error) => {
          this.errorMessage = error.error.message;
          return throwError('Error');
        })
      )
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
}
