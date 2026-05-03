import { Routes } from '@angular/router';

import { AboutPage } from './about.component';
import { ContactPage } from './contact.component';
import { HomePage } from './home.component';
import { NotFoundPage } from './not-found.component';
import { ProductsPage } from './products.component';

export const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'about', component: AboutPage },
  { path: 'products', component: ProductsPage },
  { path: 'contact', component: ContactPage },
  { path: '**', component: NotFoundPage }
];
