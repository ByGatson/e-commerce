import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeModule } from '../home/module/home.module';
import { ProductsModule } from '../products/module/products.module';
import { BasketsModule } from '../baskets/module/baskets.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    HomeModule,
    ProductsModule,
    BasketsModule,
  ],
})
export class ComponentsModule {}
