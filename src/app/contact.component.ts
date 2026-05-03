import { Component } from '@angular/core';

@Component({
  selector: 'contact-page',
  standalone: true,
  template: `
    <section class="page-panel section-panel contact-panel">
      <div class="contact-details">
        <div class="section-title">
          <div>
            <h2>Contact Us</h2>
            <p class="section-copy">Let's connect and define the next step for your product vision.</p>
          </div>
        </div>

        <div class="info-card">
          <p>Remote-first, available worldwide. Whether you need product strategy, launch support, or roadmap alignment, our team is ready to collaborate.</p>
        </div>

        <div class="contact-card">
          <div>
            <h3>Email</h3>
            <p>hello@povision.example</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+1 (555) 012-3456</p>
          </div>
          <div>
            <h3>Location</h3>
            <p>Remote-first, available worldwide</p>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <div class="form-intro">
          <span class="eyebrow">Send a quick note</span>
          <h3>Tell us about your product goals</h3>
          <p>Share your goals and we will help you shape the next phase of your product journey.</p>
        </div>

        <form class="contact-form-grid">
          <div class="form-field">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Your name" />
          </div>
          <div class="form-field">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div class="form-field full-width">
            <label for="company">Company</label>
            <input id="company" type="text" placeholder="Your company" />
          </div>
          <div class="form-field full-width">
            <label for="message">Message</label>
            <textarea id="message" rows="6" placeholder="Tell us about your project"></textarea>
          </div>
          <div class="submit-row">
            <button type="submit" class="button button-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactPage {}
