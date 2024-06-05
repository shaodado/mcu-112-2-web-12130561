import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { map } from 'rxjs';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-form-page',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './product-form-page.component.html',
  styleUrl: './product-form-page.component.css',
})
export class ProductFormPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  product!: Product;

  ngOnInit(): void {
    this.route.data.pipe(map(({ product }: Data) => product)).subscribe((product) => (this.product = product));
  }
}
