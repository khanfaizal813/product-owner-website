import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'not-found-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-panel section-panel">
      <div class="section-title">
        <div>
          <h2>Page Not Found</h2>
          <p class="section-copy">The page you are looking for doesn't exist yet. Use the menu to continue exploring the product owner site.</p>
        </div>
      </div>
      <div class="hero-actions">
        <a class="button button-primary" routerLink="/">Return Home</a>
      </div>
    </section>
  `,
  styles: []
})
export class NotFoundPage {}
