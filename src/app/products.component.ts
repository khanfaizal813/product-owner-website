import { Component } from '@angular/core';

@Component({
  selector: 'products-page',
  standalone: true,
  template: `
    <section class="page-panel section-panel">
      <div class="section-title">
        <div>
          <h2>Products & Product Offerings</h2>
          <p class="section-copy">Practical product descriptions to demonstrate how product leadership, design, and delivery align around value.</p>
        </div>
      </div>

      <div class="product-grid">
        <div class="product-card">
          <h3>Product Discovery</h3>
          <p>Understand user needs, identify product gaps, and define a strong product vision before development begins.</p>
        </div>
        <div class="product-card">
          <h3>Roadmap Crafting</h3>
          <p>Build a compelling roadmap that connects outcomes to business value with transparency for stakeholders.</p>
        </div>
        <div class="product-card">
          <h3>Product Positioning</h3>
          <p>Frame your product story so it resonates with users, sponsors, and delivery teams alike.</p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProductsPage {}
