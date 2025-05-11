import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./admin/components/customers/module/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./admin/components/dashboard/module/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./admin/components/orders/module/orders.module').then(
        (m) => m.OrdersModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./admin/components/products/module/products.module').then(
        (m) => m.ProductsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
