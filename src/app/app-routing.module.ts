import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { SingleProductComponent } from './shared/components/products/single-product/single-product.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';
import { UsersComponent } from './shared/components/users/users.component';
import { SingleUserComponent } from './shared/components/users/single-user/single-user.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EditUserComponent } from './shared/components/users/edit-user/edit-user.component';
import { AuthGaurd } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DashBoardComponent,
  },
  {
    path: 'products',
    component: ProductsComponent, canActivate : [AuthGaurd],
    children: [
      { path: ':id', component: SingleProductComponent },
      { path: ':productId/edit', component: EditProductComponent },
    ],
  },
  {
    path: 'users',
    component: UsersComponent, canActivate : [AuthGaurd],
    children : [
      {path : ':id' , component : SingleUserComponent},
      {path : ':id/editInfo' , component : EditUserComponent}
    ]
  },
  // {
  //   path: 'users/:id',
  //   component: SingleUserComponent,
  // },
  // {
  //   path: 'users/:id/editInfo',
  //   component: EditUserComponent,
  // },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
