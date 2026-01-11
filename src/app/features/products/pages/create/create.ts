import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create',
  imports: [RouterModule,CommonModule,TranslateModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
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
