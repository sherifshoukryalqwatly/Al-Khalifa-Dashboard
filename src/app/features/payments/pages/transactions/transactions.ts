import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-transactions',
  imports: [RouterModule,TranslateModule,CommonModule],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions {
  currentLang: 'en' | 'ar' = 'en';

  constructor(private translate: TranslateService) {
    this.currentLang = (this.translate.currentLang as 'en' | 'ar') || 'en';
    this.translate.onLangChange.subscribe(e => {
      this.currentLang = e.lang as 'en' | 'ar';
    });
  }

  payments = [
    {
      id: 1,
      orderId: 1024,
      customer: 'Ahmed Ali',
      amount: 120,
      method: { en: 'Credit Card', ar: 'بطاقة ائتمان' },
      status: 'paid'
    },
    {
      id: 2,
      orderId: 1025,
      customer: 'Sara Mohamed',
      amount: 75,
      method: { en: 'PayPal', ar: 'بايبال' },
      status: 'unpaid'
    }
  ];

  getStatusClass(status: string) {
    if (status === 'paid') return 'bg-success';
    if (status === 'unpaid') return 'bg-warning';
    return 'bg-secondary';
  }

  getStatusLabel(status: string) {
    if (this.currentLang === 'ar') {
      if (status === 'paid') return 'مدفوع';
      if (status === 'unpaid') return 'غير مدفوع';
      return 'مسترجع';
    }

    if (status === 'paid') return 'Paid';
    if (status === 'unpaid') return 'Unpaid';
    return 'Refunded';
  }
}
