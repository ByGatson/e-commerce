import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../../core/services/common/http-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl: string = "https://localhost:7129";
  private controller:string = "Customer";
  constructor(private httpService: HttpClientService) { }
  
 getAll(): Observable<Customer[]> {
    return this.httpService.get<Customer[]>({
      baseUrl: this.baseUrl,
      controller: this.controller,
      action: 'getall',
    });
  }
}

export interface Customer{
  id: string;
  firstName:string;
  lastName:string;
  email:string;
  password:string;
}