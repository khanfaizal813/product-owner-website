import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('en');
  public currentLang$ = this.currentLangSubject.asObservable();

  languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'ar', name: 'العربية' },
    { code: 'ur', name: 'اردو' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'zh', name: '中文' }
  ];

  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.currentLangSubject.next('en');
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLangSubject.next(lang);
    localStorage.setItem('language', lang);
  }

  getCurrentLanguage(): string {
    return this.currentLangSubject.value;
  }

  initializeLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    this.setLanguage(savedLang);
  }
}