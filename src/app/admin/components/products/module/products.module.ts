import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsRoutingModule, CardModule, ButtonModule, ToastModule],
})
export class ProductsModule { }
