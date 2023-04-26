import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginViewModel } from '../models/LoginViewModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly apiUrl = 'https://localhost:44397/api/auth/login';

  constructor(private http: HttpClient) { }

  
  login(model: LoginViewModel): Observable<any> {
    console.log("istek atildi");
    console.log(model);
    return this.http.post<any>(this.apiUrl, model);
  }
}
