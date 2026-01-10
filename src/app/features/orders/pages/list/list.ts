import { Component } from '@angular/core';
import { AnalyticsRoutingModule } from "../../../analytics/analytics-routing-module";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [AnalyticsRoutingModule,TranslateModule,CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ListOrders {
  currentLang: 'en' | 'ar' = 'en';

  constructor(private translate: TranslateService) {
    this.currentLang = (this.translate.currentLang as 'en' | 'ar') || 'en';

    this.translate.onLangChange.subscribe(e => {
      this.currentLang = e.lang as 'en' | 'ar';
    });
  }

  orders = [
    {
      id: 1,
      code: 1024,
      customer: { en: 'Ahmed Ali', ar: 'أحمد علي' },
      status: 'completed',
      total: 120
    },
    {
      id: 2,
      code: 1025,
      customer: { en: 'Sara Mohamed', ar: 'سارة محمد' },
      status: 'pending',
      total: 75
    }
  ];

  getStatusClass(status: string) {
    switch (status) {
      case 'completed': return 'bg-success';
      case 'pending': return 'bg-warning';
      case 'cancelled': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  getStatusLabel(status: string) {
    if (this.currentLang === 'ar') {
      switch (status) {
        case 'completed': return 'مكتمل';
        case 'pending': return 'قيد الانتظار';
        case 'cancelled': return 'ملغي';
      }
    }
    return status.charAt(0).toUpperCase() + status.slice(1);
  }
}
