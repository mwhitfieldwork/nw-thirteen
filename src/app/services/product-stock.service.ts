import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductStockService {

  private apiUrl = 'https://localhost:7216';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const url = `${this.apiUrl}/Product`;
    return this.http.get<Product[]>(url).pipe(
      tap((data) => console.log(data))
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  /*updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/products/${product.id}`, product);
  }*/

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/products/${id}`);
  }

}