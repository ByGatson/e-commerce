import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../../core/services/common/http-client.service';
import { Observable } from 'rxjs';
import { Product } from '../../../../core/models/product.dto';

@Injectable({
  providedIn: 'root',
})
export class AdminProductService {
  private controller: string = "Products";
  constructor(private httpService: HttpClientService) {}

  getAll(): Observable<Product[]>{
    return this.httpService.get<Product[]>({ controller: this.controller, action: 'getall' });
  }
  
  create(product: Product): Observable<boolean>{
    return this.httpService.post<any>({controller:this.controller, action: 'create'}, product);
  }
}
