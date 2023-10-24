import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  url:string = 'http://localhost:5297/api/products'


  getProducts(){
    return this.httpClient.get<IProduct[]>(this.url);
  }
}
