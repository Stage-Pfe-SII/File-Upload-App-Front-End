import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://localhost:8080';

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(`${this.baseUrl}/users`)
  }

  getUser(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }
}
