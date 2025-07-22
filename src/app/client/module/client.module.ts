import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ComponentsModule } from '../components/module/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ClientRoutingModule, ComponentsModule],
  exports:[ComponentsModule]
})
export class ClientModule {}
