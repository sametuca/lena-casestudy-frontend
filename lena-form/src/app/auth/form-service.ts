import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterViewModel } from '../models/RegisterViewModel';
import { Observable } from 'rxjs';
import { Form } from '../interfaces/Form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private readonly apiUrl = 'https://localhost:44397/api/form';

  constructor(private http: HttpClient) { }

  getAllForm(): Observable<Form[]> {
    return this.http.get<Form[]>(`${this.apiUrl}/getallform`);
  }
  getFormById(id: number)
  {
    return this.http.get(`${this.apiUrl}/getformbyid/${id}`);
  }
}
