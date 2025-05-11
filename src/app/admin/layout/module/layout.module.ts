import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ComponentsModule } from '../components/module/components.module';
import { LayoutComponent } from '../component/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, ComponentsModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
