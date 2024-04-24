import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  productName = '書籍 A';
  authors = '作者甲、作者乙、作者丙';
  company = '博碩文件';
}
