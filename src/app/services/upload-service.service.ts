import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  upload(transfert:any): Observable<any> {
    const formData = new FormData();
    formData.append('file', transfert);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }}
