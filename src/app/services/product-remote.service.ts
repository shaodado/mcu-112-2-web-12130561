import { HttpClient, HttpParams } from '@angular/common/http';
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

  override getList(name: string | undefined, pageIndex: number, pageSize: number): Observable<Product[]> {
    const query: { [key: string]: string | number } = { _page: pageIndex, _limit: pageSize };
    if (name) query['name'] = name;
    const params = new HttpParams({ fromObject: query });
    return this.httpClient.get<Product[]>(this.url, { params });
  }

  override add(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.url, { ...product });
  }

  override remove(productId: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.url}/${productId}`);
  }
}
