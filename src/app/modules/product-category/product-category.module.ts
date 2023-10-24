import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { ProductCategoryCreateComponent } from './components/product-category-create/product-category-create.component';
import { ProductCategoryEditComponent } from './components/product-category-edit/product-category-edit.component';
import { ProductCategoryListComponent } from './components/product-category-list/product-category-list.component';
import { ProductCategoryRoutingModule } from './product-category-routing.module';

@NgModule({
  declarations: [
    ProductCategoryListComponent,
    ProductCategoryCreateComponent,
    ProductCategoryEditComponent,
  ],
  imports: [CommonModule, ProductCategoryRoutingModule, ReactiveFormsModule],
})
export class ProductCategoryModule {}
