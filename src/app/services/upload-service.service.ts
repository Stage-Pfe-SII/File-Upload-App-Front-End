import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfert } from '../models/Transfert.model';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  upload(transfert:Transfert, files: File[]): Observable<any> {
    const formData = new FormData();
    formData.append('transfert', JSON.stringify(transfert));
    files.forEach(file=>{
      formData.append('multipartFiles', file)
    })
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }}
