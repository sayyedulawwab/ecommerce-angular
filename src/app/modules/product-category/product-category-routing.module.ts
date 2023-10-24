import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryCreateComponent } from './components/product-category-create/product-category-create.component';
import { ProductCategoryEditComponent } from './components/product-category-edit/product-category-edit.component';
import { ProductCategoryListComponent } from './components/product-category-list/product-category-list.component';

const routes: Routes = [
  { path: 'productcategories', component: ProductCategoryListComponent },
  { path: 'productcategories/add', component: ProductCategoryCreateComponent },
  {
    path: 'productcategories/edit/:id',
    component: ProductCategoryEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCategoryRoutingModule {}
