import { FormArray, FormControl } from '@angular/forms';

export interface IProductForm {
  id: FormControl<string | null>;
  name: FormControl<string | null>;
  authors: FormArray<FormControl<string | null>>;
  company: FormControl<string | null>;
  isShow: FormControl<boolean>;
  price: FormControl<string | null>;
}
