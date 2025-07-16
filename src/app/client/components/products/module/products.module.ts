import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from '../component/products.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ProductListComponent } from '../component/product-list/product-list.component';

@NgModule({
  declarations: [ProductsComponent, ProductListComponent],
  imports: [CommonModule, ProductsRoutingModule, CardModule, ButtonModule, ToastModule],
  providers:[]
})
export class ProductsModule {}
 