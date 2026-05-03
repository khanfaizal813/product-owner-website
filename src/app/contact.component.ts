import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'contact-page',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section class="page-panel section-panel contact-panel">
      <div class="contact-details">
        <div class="section-title">
          <div>
            <h2>{{ 'contact.title' | translate }}</h2>
            <p class="section-copy">{{ 'contact.subtitle' | translate }}</p>
          </div>
        </div>

        <div class="info-card">
          <p>{{ 'contact.info' | translate }}</p>
        </div>

        <div class="contact-card">
          <div>
            <h3>{{ 'contact.details.email' | translate }}</h3>
            <p>hello@povision.example</p>
          </div>
          <div>
            <h3>{{ 'contact.details.phone' | translate }}</h3>
            <p>+1 (555) 012-3456</p>
          </div>
          <div>
            <h3>{{ 'contact.details.location' | translate }}</h3>
            <p>Remote-first, available worldwide</p>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <div class="form-intro">
          <span class="eyebrow">{{ 'contact.form.eyebrow' | translate }}</span>
          <h3>{{ 'contact.form.title' | translate }}</h3>
          <p>{{ 'contact.form.subtitle' | translate }}</p>
        </div>

        <form class="contact-form-grid">
          <div class="form-field">
            <label for="name">{{ 'contact.form.name' | translate }}</label>
            <input id="name" type="text" placeholder="{{ 'contact.form.name' | translate }}" />
          </div>
          <div class="form-field">
            <label for="email">{{ 'contact.form.email' | translate }}</label>
            <input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div class="form-field full-width">
            <label for="company">{{ 'contact.form.company' | translate }}</label>
            <input id="company" type="text" placeholder="{{ 'contact.form.company' | translate }}" />
          </div>
          <div class="form-field full-width">
            <label for="message">{{ 'contact.form.message' | translate }}</label>
            <textarea id="message" rows="6" placeholder="{{ 'contact.form.message' | translate }}"></textarea>
          </div>
          <div class="submit-row">
            <button type="submit" class="button button-primary">{{ 'contact.form.submit' | translate }}</button>
          </div>
        </form>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactPage {}
