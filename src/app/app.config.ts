import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { ProductRemoteService } from './services/product-remote.service';
import { ProductService } from './services/product.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    { provide: ProductService, useClass: ProductRemoteService },
  ],
};
