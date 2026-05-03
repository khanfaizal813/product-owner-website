import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-panel hero-panel">
      <div class="hero-copy">
        <span class="eyebrow">Product Owner Website</span>
        <h1>Bring your product vision to life with clarity, speed, and thoughtful design.</h1>
        <p>Static website crafted for product owners, showcasing strategy, services, and a polished customer experience for every stakeholder.</p>
        <div class="hero-actions">
          <a class="button button-primary" routerLink="/contact">Start a Conversation</a>
          <a class="button button-secondary" href="#products">Explore Products</a>
        </div>
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <h3>4+ Core Pages</h3>
          <p>Home, About, Products, Contact—all built for a strong product portfolio presence.</p>
        </div>
        <div class="metric-card">
          <h3>Modern Visual Design</h3>
          <p>Dark glassmorphic interface, bold typography, and accessible layouts for desktop and mobile.</p>
        </div>
        <div class="metric-card">
          <h3>Static and Fast</h3>
          <p>Optimized for speed with a static frontend using Angular routing and reusable page blocks.</p>
        </div>
      </div>
    </section>

    <section id="products" class="page-panel section-panel">
      <div class="section-title">
        <div>
          <h2>Designed for product owners</h2>
          <p class="section-copy">Every page is created to highlight your value proposition, align your product narrative, and invite engagement.</p>
        </div>
      </div>

      <div class="product-grid">
        <div class="product-card">
          <h3>Product Strategy</h3>
          <p>Clear product positioning, feature planning, and roadmap framing for stakeholders and users.</p>
        </div>
        <div class="product-card">
          <h3>UX & Design Direction</h3>
          <p>Sleek, modern interfaces that support trust, clarity, and effortless customer flows.</p>
        </div>
        <div class="product-card">
          <h3>Launch Communications</h3>
          <p>Structured messaging for product announcements, stakeholder buy-in, and ongoing adoption.</p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomePage {}
