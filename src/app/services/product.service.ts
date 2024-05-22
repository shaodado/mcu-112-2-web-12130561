import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data = [
    new Product({
      id: 1,
      name: '書籍 A',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 10000,
    }),
    new Product({
      id: 2,
      name: '書籍 B',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 10000,
    }),
    new Product({
      id: 3,
      name: '書籍 C',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 10000,
    }),
    new Product({
      id: 4,
      name: '書籍 D',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 10000,
    }),
  ];

  getById(productId: number): Observable<Product> {
    const product = this._data.find(({ id }) => id === productId)!;
    return of(product);
  }

  getList(): Observable<Product[]> {
    return of(this._data);
  }

  add(product: Product): Observable<Product> {
    const id = this._data.length === 0 ? 1 : Math.max(...this._data.map(({ id }) => id)) + 1;
    const newProduct = new Product({ ...product, id });
    this._data = [...this._data, newProduct];
    return of(newProduct);
  }

  update(product: Product): Observable<Product> {
    const index = this._data.findIndex(({ id }) => product.id === id);
    const newProduct = new Product({ ...product });
    this._data[index] = newProduct;
    return of(newProduct);
  }

  remove(productId: number): Observable<Product> {
    const product = this._data.find(({ id }) => productId === id)!;
    this._data = [...this._data.filter(({ id }) => productId !== id)];
    return of(product);
  }
}
