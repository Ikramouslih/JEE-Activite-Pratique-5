import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(page: number=1, size: number=4) : Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`http://localhost:8088/products?_page=${page}&_limit=${size}`);
  }

  public checkProduct(product: Product) : Observable<Product> {
    return this.http.patch<Product>(`http://localhost:8088/products/${product.id}`,
      {checked: !product.checked});
  }

  public deleteProduct(id: number){
    return this.http.delete<any>(`http://localhost:8088/products/${id}`);
  }

  public saveProduct(product: Product) : Observable<Product> {
    return this.http.post<Product>('http://localhost:8088/products', product);
  }

  searchProducts(keyword: string) : Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`http://localhost:8088/products?name_like=${keyword}`);
  }

  public updateProduct(product: Product) : Observable<Product> {
    return this.http.patch<any>(`http://localhost:8088/products/${product.id}`, product);
  }

}
