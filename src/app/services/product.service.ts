import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data = [
    new Product({
      id: 1,
      Name: '書籍 A',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 10000,
    }),
    new Product({
      id: 2,
      Name: '書籍 B',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 10000,
    }),
    new Product({
      id: 3,
      Name: '書籍 C',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 10000,
    }),
    new Product({
      id: 4,
      Name: '書籍 D',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 10000,
    }),
  ];

  getById(productId: number):Product{
    return this._data.find(({id})=>id===productId)!;
  }
  getList(): Product[] {
    return this._data;
  }

  add(product: Product): void {
    const id = this._data.length === 0 ? 1 : Math.max(...this._data.map(({ id }) => id)) + 1;
    this._data.push(new Product({ ...product, id }));
  }

  remove(productId: number): void {
    const index = this._data.findIndex(({ id }) => productId === id);
    this._data.splice(index, 1);
  }
}
