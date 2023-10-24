import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductCategoryForm } from '../../models/product-category.model';
import { ProductCategoryService } from '../../services/product-category.service';

@Component({
  selector: 'app-product-category-edit',
  templateUrl: './product-category-edit.component.html',
  styleUrls: ['./product-category-edit.component.css'],
})
export class ProductCategoryEditComponent {
  constructor(
    private productCategoryService: ProductCategoryService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  productCategoryForm = this.fb.group({
    name: '',
    code: '',
  });

  private message: string = '';

  private id: number = 0;

  loadProductCategoryById(id: number) {
    this.productCategoryService
      .getProductCategoryById(id)
      .subscribe((productCategory) => {
        this.productCategoryForm.patchValue(productCategory);
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id: number = Number(params?.get('id')?.toString());
      this.loadProductCategoryById(id);
      this.id = id;
    });
  }

  onSubmit() {
    let changedProductCategory = this.productCategoryForm
      .value as IProductCategoryForm;

    this.productCategoryService
      .updateProductCategory(
        this.id,
        changedProductCategory as IProductCategoryForm
      )
      .subscribe((pc) => {
        this.message = 'Saved Successfully!';
        console.log(this.message);
        this.router.navigate([['/productcategories']]);
      });
  }
}
