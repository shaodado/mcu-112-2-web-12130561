import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  products = [
    new Product({
      id: 1,
      Name: '書籍 A',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text:img',
      createDate: new Date(),
      price: 10000,
    }),
    new Product({
      id: 2,
      Name: '書籍 B',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text:img',
      createDate: new Date(),
      price: 10000,
    }),
    new Product({
      id: 3,
      Name: '書籍 C',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text:img',
      createDate: new Date(),
      price: 10000,
    }),
    new Product({
      id: 4,
      Name: '書籍 D',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text:img',
      createDate: new Date(),
      price: 10000,
    }),
  ];
}
