import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../../core/services/common/http-client.service';
import {
  catchError,
  map,
  Observable,
  throwError,
} from 'rxjs';
import { Product } from '../../../../core/models/product.dto';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminProductService {
  private controller: string = 'Product';
  private baseUrl: string = "https://localhost:7200";
  constructor(private httpService: HttpClientService) {}

  getAll(): Observable<Product[]> {
    return this.httpService.get<Product[]>({
      baseUrl: this.baseUrl,
      controller: this.controller,
      action: 'getall',
    });
  }

  create(product: Product): Observable<boolean> {
    return this.httpService
      .post<Product>({ baseUrl:this.baseUrl, controller: this.controller, action: 'create' }, product)
      .pipe(
        map(() => true),
        catchError((err: HttpErrorResponse) => {
          const errors = err?.error?.errors;
          const message = errors
            ? Object.values(errors).flat().join('\n')
            : 'Bir hata oluştu.';
          return throwError(() => message);
        })
      );
  }
}
