import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterLink, CommonModule, TranslateModule],
  template: `
    <section class="page-panel hero-panel">
      <div class="hero-copy">
        <span class="eyebrow">{{ 'home.heroTitle' | translate }}</span>
        <h1>{{ 'home.heroTitle' | translate }}</h1>
        <p>{{ 'home.heroSubtitle' | translate }}</p>
        <div class="hero-actions">
          <a class="button button-primary" routerLink="/contact">{{ 'home.ctaPrimary' | translate }}</a>
          <a class="button button-secondary" href="#products">{{ 'home.ctaSecondary' | translate }}</a>
        </div>
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <h3>{{ 'home.metrics.projects' | translate }}</h3>
          <p>{{ 'home.aboutDesc' | translate }}</p>
        </div>
        <div class="metric-card">
          <h3>{{ 'home.metrics.clients' | translate }}</h3>
          <p>{{ 'home.productsTitle' | translate }}</p>
        </div>
        <div class="metric-card">
          <h3>{{ 'home.metrics.experience' | translate }}</h3>
          <p>{{ 'home.aboutTitle' | translate }}</p>
        </div>
      </div>
    </section>

    <section id="products" class="page-panel section-panel">
      <div class="section-title">
        <div>
          <h2>{{ 'home.productsTitle' | translate }}</h2>
          <p class="section-copy">{{ 'home.aboutDesc' | translate }}</p>
        </div>
      </div>

      <div class="product-grid">
        <div class="product-card" *ngFor="let product of 'home.products' | translate">
          <h3>{{ product.title }}</h3>
          <p>{{ product.desc }}</p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomePage {}
