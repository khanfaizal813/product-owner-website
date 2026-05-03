import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './language.service';

@Component({
  selector: 'language-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-selector">
      <select
        [value]="currentLang"
        (change)="onLanguageChange($event)"
        class="language-dropdown"
      >
        <option *ngFor="let lang of languages" [value]="lang.code">
          {{ lang.flag }} {{ lang.name }}
        </option>
      </select>
    </div>
  `,
  styles: [`
    .language-selector {
      position: relative;
    }

    .language-dropdown {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 18px;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      color: #334155;
      cursor: pointer;
      transition: border-color 0.2s ease;
      min-width: 120px;
    }

    .language-dropdown:hover {
      border-color: #cbd5e1;
    }

    .language-dropdown:focus {
      outline: none;
      border-color: var(--brand);
      box-shadow: 0 0 0 3px rgba(246, 139, 31, 0.1);
    }
  `]
})
export class LanguageSelectorComponent implements OnInit {
  languages: any[] = [];
  currentLang = 'en';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languages = this.languageService.languages;
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
    this.languageService.initializeLanguage();
  }

  onLanguageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.languageService.setLanguage(lang);
  }
}