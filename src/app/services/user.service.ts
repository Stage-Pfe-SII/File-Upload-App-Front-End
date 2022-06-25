import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(`${this.baseUrl}/users`)
  }

  getUser(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  createUser(user:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/users`,user);
  }
}
