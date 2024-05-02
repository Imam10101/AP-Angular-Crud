import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice.model';

const baseUrl='https://localhost:7041/api/Invoices'
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Invoice[]>{
    return this.http.get<Invoice[]>(baseUrl);
  }
  get(InvoiceId:any):Observable<Invoice[]>{
    return this.http.get<Invoice[]>(`${baseUrl}/${InvoiceId}`);
  }
  create(Invoice:any):Observable<any>{
    return this.http.post(baseUrl, Invoice);
  }
  update(InvoiceId: any, Invoice: any): Observable<any>{
    return this.http.put(`${baseUrl}/${InvoiceId}/${InvoiceId}`, Invoice)
  }
  delete(InvoiceId: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${InvoiceId}`);
  }
}

