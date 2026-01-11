import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-store',
  imports: [RouterModule,TranslateModule],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store {
  isRtl = false;
  
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.setDir(this.translate.currentLang);
    this.translate.onLangChange.subscribe(e => this.setDir(e.lang));
  }

  setDir(lang: string) {
    this.isRtl = lang === 'ar';
  }
}
