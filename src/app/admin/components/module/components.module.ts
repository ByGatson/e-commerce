import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CustomersModule } from '../customers/module/customers.module';



@NgModule({
  declarations: [],
  imports: [
  CommonModule
  ],
  providers:[ provideHttpClient(withInterceptorsFromDi())]
})
export class ComponentsModule { }
