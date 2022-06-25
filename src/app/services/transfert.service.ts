import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  private baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getTransferts():Observable<any>{
    return this.http.get(`${this.baseUrl}/transfets`)
  }

  getTransfert(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/transferts/${id}`);
  }}
