import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonIcon } from 'primeng/button';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, ComponentsRoutingModule, MatListModule, PanelMenuModule, ButtonIcon],
  exports: [HeaderComponent, SidebarComponent, FooterComponent],
})
export class ComponentsModule {}
