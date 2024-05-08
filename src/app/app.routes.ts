import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductPageComponent },
  { path: 'login', component: LoginPageComponent },
];
