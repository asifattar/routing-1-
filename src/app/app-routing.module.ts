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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashBoardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: SingleProductComponent },
  { path: 'products/:productId/edit', component: EditProductComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: SingleUserComponent },
  { path: 'users/:id/editInfo', component: EditUserComponent},
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
