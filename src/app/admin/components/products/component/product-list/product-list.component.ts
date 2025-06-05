import { Component, Input } from '@angular/core';
import { Product } from '../../../../../core/models/product.dto';
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
    this.productService.getAll().subscribe({
      next: (data) => (this.products = data),
      error: () =>
        this.alertify.message('Ürün listelenirken hata oluştu', 'Error'),
    });
  }
}
