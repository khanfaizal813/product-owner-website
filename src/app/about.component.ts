import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  standalone: true,
  template: `
    <section class="page-panel section-panel">
      <div class="section-title">
        <div>
          <h2>About PO Vision</h2>
          <p class="section-copy">Mission-driven storytelling for product owners who want their work to feel strategic, elegant, and impactful.</p>
        </div>
      </div>
      <div class="contact-card">
        <div>
          <h3>Our Purpose</h3>
          <p>We help product owners present their roadmap, process, and product offerings in a way that builds confidence and creates momentum.</p>
        </div>
        <div>
          <h3>Why it matters</h3>
          <p>Great product leadership is about more than features—it is about clarity, alignment, and a compelling product narrative.</p>
        </div>
        <div>
          <h3>What we deliver</h3>
          <p>Clean static pages, intuitive navigation, and polished content structure that supports a professional product story.</p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutPage {}
