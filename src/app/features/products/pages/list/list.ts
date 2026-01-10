import { Component } from '@angular/core';
import { AnalyticsRoutingModule } from "../../../analytics/analytics-routing-module";
import { RouterModule } from '@angular/router';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [AnalyticsRoutingModule,RouterModule,TranslateModule,CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  currentLang: 'en' | 'ar' = 'en';

  products = [
    {
      id: 1,
      name: { en: 'iPhone 14', ar: 'آيفون 14' },
      category: { en: 'Electronics', ar: 'إلكترونيات' },
      price: 999,
      stock: 24,
      stockStatus: 'in',
      status: 'active',
      image: 'data:image/webp;base64,UklGRpAaAABXRUJQ...' // shortened
    },
    {
      id: 2,
      name: { en: 'Adidas Shoes', ar: 'حذاء أديداس' },
      category: { en: 'Fashion', ar: 'أزياء' },
      price: 120,
      stock: 3,
      stockStatus: 'low',
      status: 'active',
      image: 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/b0b6d4a107ad4e84b3baaf8700866f07_9366/H03472_01_standard.jpg'
    }
  ];

  constructor(private translate: TranslateService) {
    const lang = this.translate.currentLang || this.translate.getDefaultLang();
    this.currentLang = (lang === 'ar' ? 'ar' : 'en');

    this.translate.onLangChange.subscribe(e => {
      this.currentLang = (e.lang === 'ar' ? 'ar' : 'en');
    });
  }
  getStockBadge(status: string) {
    switch (status) {
      case 'in': return 'bg-success';
      case 'low': return 'bg-warning';
      case 'out': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  getStockLabel(status: string) {
    const map: any = {
      in: { en: 'In Stock', ar: 'متوفر' },
      low: { en: 'Low Stock', ar: 'كمية قليلة' },
      out: { en: 'Out of Stock', ar: 'غير متوفر' }
    };
    return map[status][this.currentLang];
  }

  getStatusLabel(status: string) {
    return status === 'active'
      ? (this.currentLang === 'en' ? 'Active' : 'نشط')
      : (this.currentLang === 'en' ? 'Inactive' : 'غير نشط');
  }
}
