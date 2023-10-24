import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IProductCategory,
  IProductCategoryForm,
} from '../models/product-category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  constructor(private httpClient: HttpClient) {}

  private url: string = 'http://localhost:5297/api/productcategories';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhd3dhYjIyQGVtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMTAwMiJ9.E9U2IiJpozk0c_dWeOWHs73WEYoMi0XwEOHTNsGvUFQ',
    }),
  };

  // GET: get product categories
  getProductCategories(): Observable<IProductCategory[]> {
    return this.httpClient.get<IProductCategory[]>(this.url);
  }

  // POST: add product category
  addProductCategory(
    productCategory: IProductCategoryForm
  ): Observable<IProductCategoryForm> {
    return this.httpClient.post<IProductCategoryForm>(
      this.url,
      productCategory,
      this.httpOptions
    );
  }

  // GET: get product category by ID
  getProductCategoryById(id: number): Observable<IProductCategory> {
    return this.httpClient.get<IProductCategory>(`${this.url}/${id}`);
  }

  // PUT: edit product category
  updateProductCategory(
    id: number,
    productCategory: IProductCategoryForm
  ): Observable<IProductCategoryForm> {
    return this.httpClient.put<IProductCategoryForm>(
      `${this.url}/${id}`,
      productCategory,
      this.httpOptions
    );
  }

  // DELETE: delete product category
  deleteproductCategory(id: number): Observable<IProductCategory> {
    return this.httpClient.delete<IProductCategory>(
      `${this.url}/${id}`,
      this.httpOptions
    );
  }
}
