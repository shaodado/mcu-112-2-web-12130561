import { ProductService } from './../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit, inject, input, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent implements OnInit{
  @Input({transform: numberAttribute})
  id!: number;
  product!:Product;
  private router = inject(Router);
  private ProductService=inject (ProductService);

  ngOnInit(): void {
    this.ProductService.getById(this.id).subscribe(product => (this.product = product));
  }
  onEdit(): void {
    this.router.navigate(['product', 'form', this.product.id]);
  }
  onRemove(): void {
    this.ProductService.remove(this.product.id);
    this.router.navigate(['products']);
  }
  onBack(): void {
    this.router.navigate(['products']);
  }
}
