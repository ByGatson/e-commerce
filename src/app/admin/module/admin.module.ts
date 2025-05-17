import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from '../layout/module/layout.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule, LayoutModule],
  exports: [LayoutModule],
    providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AdminModule {}
