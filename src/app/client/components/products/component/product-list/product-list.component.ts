import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../../core/models/product.dto';
import { ToastrAlertifyService } from '../../../../../core/services/client/alertify.service';
import { AdminProductService } from '../../../../../core/services/common/product/admin-product.service';

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
    private alertify: ToastrAlertifyService,
    private cd: ChangeDetectorRef
  ) {
    this.fetchProducts();
  }

  public fetchProducts(): void {
    this.productService.getAll().subscribe({
      next: (data) =>  {
        this.products = [...data];
        this.cd.detectChanges();
      },
      error: () =>
        this.alertify.message('Ürün listelenirken hata oluştu', 'Error'),
    });
  }
}
