import { Component, OnInit } from '@angular/core';
import { AdminProductService } from '../service/admin-product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: AdminProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((result) => {
      this.products = result.data;
      console.log(this.products);
    });

    debugger;
  }
}
