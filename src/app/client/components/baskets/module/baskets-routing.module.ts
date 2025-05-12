import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketsComponent } from '../component/baskets.component';

const routes: Routes = [{ path: '', component: BasketsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketsRoutingModule {}
