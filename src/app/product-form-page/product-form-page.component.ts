import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { map } from 'rxjs';
import { IProductForm } from '../interface/product-form.interface';
import { Product } from '../model/product';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product-form-page',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './product-form-page.component.html',
  styleUrl: './product-form-page.component.css',
})
export class ProductFormPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  form = new FormGroup<IProductForm>({
    id: new FormControl<string | null>(null),
    name: new FormControl<string | null>(null, { validators: [Validators.required] }),
    authors: new FormArray<FormControl<string | null>>([]),
    company: new FormControl<string | null>(null, { validators: [Validators.required] }),
    isShow: new FormControl<boolean>(false, { nonNullable: true }),
    price: new FormControl<number | null>(null, { validators: [Validators.required] }),
  });
  author: any;
  productService: any;

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get isShow(): FormControl<boolean> {
    return this.form.get('isShow') as FormControl<boolean>;
  }

  get company(): FormControl<string | null> {
    return this.form.get('company') as FormControl<string | null>;
  }

  get price(): FormControl<number | null> {
    return this.form.get('price') as FormControl<number | null>;
  }

  get authors(): FormArray<FormControl<string | null>> {
    return this.form.get('authors') as FormArray<FormControl<string | null>>;
  }
  private readonly router = inject(Router);
  private readonly ProductService = inject(ProductService);

  product!: Product;

  ngOnInit(): void {
    this.route.data.pipe(map(({ product }: Data) => product)).subscribe((product) => (this.product = product));
  }

  onAddAuthors(): void {
    const formControl = new FormControl<string | null>(null, { validators: [Validators.required] });
    this.authors.push(formControl);
  }

  onSave(): void {
    const formData = new Product({
      name: this.name.value!,
      authors: this.authors.value.map(() => this.author!),
      company: this.company.value!,
      isShow: this.isShow.value,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: this.price.value!,
    });
    this.ProductService.add(formData).subscribe(() => this.router.navigate(['products']));
  }

  onCancel(): void {
    this.router.navigate(['products']);
  }
}
