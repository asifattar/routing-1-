import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { SingleProductComponent } from './shared/components/products/single-product/single-product.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';
import { SingleUserComponent } from './shared/components/users/single-user/single-user.component';
import { EditUserComponent } from './shared/components/users/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProductsComponent,
    UsersComponent,
    SingleProductComponent,
    EditProductComponent,
    SingleUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
