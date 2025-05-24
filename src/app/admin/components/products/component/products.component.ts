import { Component } from '@angular/core';
import { catchError, of, take } from 'rxjs';
import { HttpClientService } from '../../../../core/services/common/http-client.service';
import { AdminProductService } from '../service/admin-product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: any[] = [];
  constructor(private productService: AdminProductService) {this.fetchProducts();}
  
  fetchProducts(): void {
    this.productService
      .getAll()
      .pipe(
        take(1),
        catchError((error) => {
          console.error('Ürünler alınırken hata oluştu:', error);
          return of([]);
        })
      )
      .subscribe((data) => {
        this.products = data;
      });
  }
}
