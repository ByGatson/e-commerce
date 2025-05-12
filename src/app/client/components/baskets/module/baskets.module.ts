import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketsRoutingModule } from './baskets-routing.module';
import { BasketsComponent } from '../component/baskets.component';

@NgModule({
  declarations: [BasketsComponent],
  imports: [CommonModule, BasketsRoutingModule],
})
export class BasketsModule {}
