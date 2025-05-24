import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../../core/services/common/http-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminProductService {
  private controller: string = "Products";
  constructor(private httpService: HttpClientService) {}

  getAll(): Observable<any[]>{
    return this.httpService.get<any[]>({ controller: this.controller, action: 'getall' });
  }
  create(): Observable<boolean>{
    return this.httpService.post<any>({controller:this.controller, action: 'create'}, null);
  }
}
