import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from '../component/customers-list/customers-list.component';
import { CustomersCreateComponent } from '../component/customers-create/customers-create.component';
import { CustomersDeleteComponent } from '../component/customers-delete/customers-delete.component';
import { CustomersComponent } from '../component/customers.component';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomersCreateComponent,
    CustomersDeleteComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    FormsModule,
  ],
  exports: [CustomersListComponent],
})
export class CustomersModule {}
