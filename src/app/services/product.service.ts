import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = "https://northwind.vercel.app/api/products";

  constructor(private http: HttpClient) {}


  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  getById(id : number) : Observable<IProduct> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IProduct>(url);
  }

  update(product: IProduct): Observable<IProduct> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<IProduct>(url, product);
  }

  delete(productId : number): Observable<IProduct> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<IProduct>(url);
  }

}
