import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from '../layout/module/layout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule, LayoutModule],
  exports: [LayoutModule],
})
export class AdminModule {}
