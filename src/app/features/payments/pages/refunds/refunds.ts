import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-refunds',
  imports: [CommonModule,RouterModule,CommonModule,TranslateModule],
  templateUrl: './refunds.html',
  styleUrl: './refunds.css',
})
export class Refunds {
   refunds = [
    {
      id: 'REF-1001',
      orderId: 'ORD-100245',
      customer: 'Mohamed Hassan',
      amount: 1450,
      reason: 'Damaged product',
      status: 'Pending',
      date: '2025-12-13'
    },
    {
      id: 'REF-1002',
      orderId: 'ORD-100212',
      customer: 'Sara Ahmed',
      amount: 780,
      reason: 'Wrong item',
      status: 'Approved',
      date: '2025-12-10'
    }
  ];
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
