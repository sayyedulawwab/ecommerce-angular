import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductCategory } from '../../product-category/models/product-category.model';
import { IProduct, IProductForm } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  private url: string = 'http://localhost:5297/api/products';

  private httpOptions = {
    headers: new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhd3dhYjIyQGVtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMTAwMiJ9.E9U2IiJpozk0c_dWeOWHs73WEYoMi0XwEOHTNsGvUFQ',
    }),
  };

  // GET: get products
  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.url);
  }

  // GET: get product categories
  getProductCategories(): Observable<IProductCategory[]> {
    const url = 'http://localhost:5297/api/productcategories';
    return this.httpClient.get<IProductCategory[]>(url);
  }

  // POST: add product
  addProduct(product: IProductForm, productImage: File): Observable<any> {
    const formData = new FormData();

    formData.append('Name', product.name);
    formData.append('Price', product.price.toString());
    formData.append('Quantity', product.quantity.toString());
    formData.append('ProductCategoryID', product.productCategoryID.toString());

    if (productImage) {
      formData.append('Image', productImage);
    }

    return this.httpClient.post(this.url, formData, this.httpOptions);
  }

  // GET: get product by ID
  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.url}/${id}`);
  }

  // PUT: edit product
  updateProduct(id: number, product: IProductForm): Observable<IProductForm> {
    return this.httpClient.put<IProductForm>(
      `${this.url}/${id}`,
      product,
      this.httpOptions
    );
  }

  // DELETE: delete product category
  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`, this.httpOptions);
  }
}
