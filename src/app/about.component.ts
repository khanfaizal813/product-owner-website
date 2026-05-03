import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'about-page',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section class="page-panel section-panel">
      <div class="section-title">
        <div>
          <h2>{{ 'about.title' | translate }}</h2>
          <p class="section-copy">{{ 'about.subtitle' | translate }}</p>
        </div>
      </div>
      <div class="contact-card">
        <div>
          <h3>{{ 'about.content' | translate }}</h3>
          <p>{{ 'about.content' | translate }}</p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutPage {}
