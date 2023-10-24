import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IProductCategory } from '../../../product-category/models/product-category.model';
import { IProductForm } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  productForm = this.fb.group({
    name: '',
    price: 50,
    quantity: 1,
    productCategoryID: 0,
  });

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  private message: string = '';
  productCategories: IProductCategory[] = [];
  selectedFileName: string = '';
  private productImage?: File;

  loadProductCategories() {
    this.productService
      .getProductCategories()
      .subscribe((productCategories) => {
        this.productCategories = productCategories;
      });
  }

  ngOnInit() {
    this.loadProductCategories();
  }

  onImageSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0 && input.files[0]) {
      const file = input.files[0];
      console.log(file);
      this.selectedFileName = file.name;
      this.productImage = file;
    }
  }

  onSubmit() {
    let newProduct = this.productForm.value as IProductForm;
    const imageFile = this.productImage;
    if (imageFile) {
      this.productService
        .addProduct(newProduct as IProductForm, imageFile)
        .subscribe(() => {
          this.message = 'Saved Successfully!';
          console.log(this.message);
          this.router.navigate([['/products']]);
        });
    }
  }
}
