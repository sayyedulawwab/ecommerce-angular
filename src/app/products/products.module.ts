import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCreateComponent } from './product-create/product-create.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
