import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, startWith, switchMap } from 'rxjs';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, ReactiveFormsModule, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  router = inject(Router);

  private ProductService = inject(ProductService);

  private readonly refresh$ = new Subject<void>();

  protected readonly formControl = new FormControl<string | undefined>(undefined);

  readonly products$ = this.refresh$.pipe(
    startWith(undefined),
    switchMap(() => this.ProductService.getList(undefined, 1, 5))
  );

  onAdd(): void {
    const product = new Product({
      name: '書籍 zz',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文件',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 10000,
    });

    this.ProductService.add(product).subscribe(() => this.refresh$.next());
  }

  onEdit(product: Product): void {
    this.router.navigate(['product', 'form', product.id]);
  }

  onRemove({ id }: Product): void {
    this.ProductService.remove(id).subscribe(() => this.refresh$.next());
  }

  onView(product: Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }
}
