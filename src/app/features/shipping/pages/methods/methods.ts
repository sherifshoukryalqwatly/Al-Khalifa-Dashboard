import { Component } from '@angular/core';
import { AnalyticsRoutingModule } from "../../../analytics/analytics-routing-module";
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-methods',
  imports: [AnalyticsRoutingModule,RouterModule,TranslateModule,CommonModule],
  templateUrl: './methods.html',
  styleUrl: './methods.css',
})
export class Methods {
  currentLang: 'en' | 'ar' = 'en';

  constructor(private translate: TranslateService) {
    this.currentLang = (this.translate.currentLang as 'en' | 'ar') || 'en';
    this.translate.onLangChange.subscribe(e => {
      this.currentLang = e.lang as 'en' | 'ar';
    });
  }

  shipments = [
    {
      id: 1,
      orderId: '#1024',
      customer: 'Ahmed Ali',
      carrier: 'FedEx',
      tracking: 'FDX123456',
      status: 'pending'
    },
    {
      id: 2,
      orderId: '#1025',
      customer: 'Sara Mohamed',
      carrier: 'DHL',
      tracking: 'DHL987654',
      status: 'delivered'
    }
  ];

  getStatusClass(status: string) {
    if (status === 'delivered') return 'bg-success';
    if (status === 'shipped') return 'bg-info';
    if (status === 'pending') return 'bg-warning';
    return 'bg-danger';
  }

  getStatusLabel(status: string) {
    if (this.currentLang === 'ar') {
      if (status === 'pending') return 'قيد الشحن';
      if (status === 'shipped') return 'تم الشحن';
      if (status === 'delivered') return 'تم التوصيل';
      return 'ملغي';
    }

    if (status === 'pending') return 'Pending';
    if (status === 'shipped') return 'Shipped';
    if (status === 'delivered') return 'Delivered';
    return 'Cancelled';
  }
}
