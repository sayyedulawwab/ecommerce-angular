import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:IProduct[] = []

  constructor(private productService:ProductService){
    this.productService
              .getProducts()
              .subscribe(products=> this.products = products);
  }
}
