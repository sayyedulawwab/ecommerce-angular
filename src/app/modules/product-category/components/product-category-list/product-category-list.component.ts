import { Component } from '@angular/core';
import { IProductCategory } from '../../models/product-category.model';
import { ProductCategoryService } from '../../services/product-category.service';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css'],
})
export class ProductCategoryListComponent {
  productCategories: IProductCategory[] = [];

  constructor(private productCategoryService: ProductCategoryService) {
    this.productCategoryService
      .getProductCategories()
      .subscribe(
        (productCategories) => (this.productCategories = productCategories)
      );
  }

  delete(productCategory: IProductCategory): void {
    this.productCategories = this.productCategories.filter(
      (pc) => pc !== productCategory
    );
    this.productCategoryService
      .deleteproductCategory(productCategory.productCategoryID)
      .subscribe();
  }
}
