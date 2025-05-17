import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ComponentsModule } from '../components/module/components.module';
import { LayoutComponent } from '../component/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SplitterModule } from 'primeng/splitter';
@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
    ComponentsModule,
    MatSidenavModule,
    SplitterModule
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
