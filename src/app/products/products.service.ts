import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }
  
  createProduct(productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product';

    return this.httpClient.post<Product>(productUrl, productBody); //return an observavble
  }

  viewProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product'+productId;

    return this.httpClient.get<Product>(productUrl); //return an observavble
  }

  updateProduct(productId: any, productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product'+productId;

    return this.httpClient.put<Product>(productUrl, productBody); //return an observavble
  }

  deleteProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/product'+productId;

    return this.httpClient.delete<Product>(productUrl); //return an observavble
  }

  searchCategoryProducts(categoryId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/category='+categoryId;

    return this.httpClient.get<Product>(productUrl); //return an observavble
  }

  searchDateProducts(dateParam: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/date='+dateParam;

    return this.httpClient.get<Product>(productUrl); //return an observavble
  }


}
