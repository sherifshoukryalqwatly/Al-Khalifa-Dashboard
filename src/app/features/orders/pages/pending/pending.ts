import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pending',
  imports: [CommonModule,RouterModule,TranslateModule],
  templateUrl: './pending.html',
  styleUrl: './pending.css',
})
export class PendingOrders {
  orders = [
    {
      id: 'ORD-100245',
      customer: 'Mohamed Hassan',
      date: '2025-12-12',
      total: 1450,
      status: 'Pending'
    },
    {
      id: 'ORD-100246',
      customer: 'Sara Ahmed',
      date: '2025-12-11',
      total: 780,
      status: 'Pending'
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
