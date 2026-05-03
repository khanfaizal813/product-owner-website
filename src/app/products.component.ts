import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section class="page-panel section-panel">
      <div class="section-title">
        <div>
          <h2>{{ 'products.title' | translate }}</h2>
          <p class="section-copy">{{ 'products.title' | translate }}</p>
        </div>
      </div>

      <div class="product-grid">
        <div class="product-card" *ngFor="let service of 'products.services' | translate">
          <h3>{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProductsPage {}
