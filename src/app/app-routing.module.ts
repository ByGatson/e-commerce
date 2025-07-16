import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/component/layout.component';
import { DashboardComponent } from './admin/components/dashboard/component/dashboard.component';
import { HomeComponent } from './client/components/home/component/home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: 'customers',
        loadChildren: () =>
          import('./admin/components/customers/module/customers.module').then(
            (m) => m.CustomersModule
          ),
      },
      {
        path: '',
        component: DashboardComponent,
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
    ],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./client/components/products/module/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'baskets',
    loadChildren: () =>
      import('./client/components/baskets/module/baskets.module').then(
        (m) => m.BasketsModule
      ),
  },
  {
    path:'register',
    loadChildren:()=>import('./client/components/register/module/register.module').then(
      (m) => m.RegisterModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
