import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from '../component/products.component';
import { ProductEditComponent } from '../component/product-edit/product-edit.component';

@NgModule({
  declarations: [ProductsComponent, ProductEditComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule { }
