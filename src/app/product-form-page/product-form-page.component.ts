import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { map } from 'rxjs';
import { IProductForm } from '../interface/product-form.interface';
import { Product } from '../model/product';

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
    price: new FormControl<string | null>(null, { validators: [Validators.required, Validators.pattern('^[0-9]$')] }),
  });

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get company(): FormControl<string | null> {
    return this.form.get('company') as FormControl<string | null>;
  }

  get price(): FormControl<string | null> {
    return this.form.get('price') as FormControl<string | null>;
  }
  get authors(): FormArray<FormControl<string | null>> {
    return this.form.get('authors') as FormArray<FormControl<string | null>>;
  }

  product!: Product;

  ngOnInit(): void {
    this.route.data.pipe(map(({ product }: Data) => product)).subscribe((product) => (this.product = product));
  }

  onAddAuthors(): void {
    const formControl = new FormControl<string | null>(null, { validators: [Validators.required] });
    this.authors.push(formControl);
  }
}
