import { Component, Input } from '@angular/core';
import { Product } from '../../../../../core/models/product.dto';
import { catchError, of, take } from 'rxjs';
import { ToastrAlertifyService } from '../../../../../core/services/client/alertify.service';
import { AdminProductService } from '../../service/admin-product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  @Input() refresh: boolean = false;
  products: Product[] = [];
  constructor(
    private productService: AdminProductService,
    private alertify: ToastrAlertifyService
  ) {
    this.fetchProducts();
  }

  public fetchProducts(): void {
    this.productService
      .getAll()
      .pipe(
        take(1),
        catchError((error) => {
          this.alertify.message(
            `Ürünler alınırken hata oluştu: ${error.message}`,
            'Error'
          );
          return of([]);
        })
      )
      .subscribe((data) => {
        this.products = [...data];
      });
  }
}
