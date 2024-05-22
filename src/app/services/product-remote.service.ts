import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductRemoteService extends ProductService {
  private readonly url = 'http://localhost:3000/products';

  private readonly httpClient = inject(HttpClient);

  override getById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/${productId}`);
  }

  override getList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }
}
