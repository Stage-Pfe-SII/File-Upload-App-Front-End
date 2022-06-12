import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  getTransferts():Observable<any>{
    return this.http.get(`${this.baseUrl}/transfets`)
  }

  getTransfert(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/transferts/${id}`);
  }}
