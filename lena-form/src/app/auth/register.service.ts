import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterViewModel } from '../models/RegisterViewModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly apiUrl = 'https://localhost:44397/api/auth/register';

  constructor(private http: HttpClient) { }

  
  register(model: RegisterViewModel): Observable<any> {
    console.log("istek atildi");
    console.log(model);
    return this.http.post<any>(this.apiUrl, model);
  }
}
