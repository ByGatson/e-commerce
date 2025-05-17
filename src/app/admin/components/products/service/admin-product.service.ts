import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminProductService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://localhost:7284/api/Products';
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getall`);
  }
}
