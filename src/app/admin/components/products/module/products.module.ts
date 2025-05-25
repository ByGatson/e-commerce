import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from '../component/products.component';
import { ProductEditComponent } from '../component/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from '../component/product-list/product-list.component';

@NgModule({
  declarations: [ProductsComponent, ProductEditComponent, ProductListComponent],
  imports: [CommonModule, ProductsRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ProductsModule { }
