import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private langSubject = new BehaviorSubject<'en' | 'ar'>('en');
  lang$ = this.langSubject.asObservable();

  constructor(private translate: TranslateService) {}

  init() {
    let saved: 'en' | 'ar' = 'en';

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      saved = (localStorage.getItem('lang') as 'en' | 'ar') || 'en';
    }

    this.setLang(saved);
  }

  setLang(lang: 'en' | 'ar') {
    this.translate.use(lang);

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('lang', lang);
    }

    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }

    this.langSubject.next(lang);
  }

  toggle() {
    this.setLang(this.langSubject.value === 'en' ? 'ar' : 'en');
  }

  get current() {
    return this.langSubject.value;
  }
}
