import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @ViewChild('productList') productListComponent!: ProductListComponent;

  editVisible: boolean = false;
  constructor() {}
  openEdit(): void {
    this.editVisible = true;
  }
  isEdited(): void {
    this.productListComponent.fetchProducts();
    this.editVisible = false;
  }
}
