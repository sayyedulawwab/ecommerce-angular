import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductCategoryForm } from '../../models/product-category.model';
import { ProductCategoryService } from '../../services/product-category.service';

@Component({
  selector: 'app-product-category-create',
  templateUrl: './product-category-create.component.html',
  styleUrls: ['./product-category-create.component.css'],
})
export class ProductCategoryCreateComponent {
  productCategoryForm = this.fb.group({
    name: '',
    code: '',
  });

  constructor(
    private productCategoryService: ProductCategoryService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private id: number = 0;
  private message: string = '';

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
    let newProductCategory = this.productCategoryForm
      .value as IProductCategoryForm;

    this.productCategoryService
      .addProductCategory(newProductCategory as IProductCategoryForm)
      .subscribe(() => {
        this.message = 'Saved Successfully!';
        console.log(this.message);
        this.router.navigate([['/productcategories']]);
      });
  }
}
