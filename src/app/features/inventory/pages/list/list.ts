import { Component } from '@angular/core';
import { AnalyticsRoutingModule } from "../../../analytics/analytics-routing-module";
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [AnalyticsRoutingModule,RouterModule,TranslateModule,CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class InventoryList {
  currentLang: 'en' | 'ar' = 'en';

  constructor(private translate: TranslateService) {
    this.currentLang = (this.translate.currentLang as 'en' | 'ar') || 'en';
    this.translate.onLangChange.subscribe(e => {
      this.currentLang = e.lang as 'en' | 'ar';
    });
  }

  inventory = [
    {
      id: 1,
      name: { en: 'iPhone 14', ar: 'آيفون 14' },
      category: { en: 'Electronics', ar: 'إلكترونيات' },
      quantity: 50,
      status: 'in',
      image: 'https://via.placeholder.com/40'
    },
    {
      id: 2,
      name: { en: 'Adidas Shoes', ar: 'حذاء أديداس' },
      category: { en: 'Fashion', ar: 'ملابس' },
      quantity: 20,
      status: 'low',
      image: 'https://via.placeholder.com/40'
    }
  ];

  getStatusClass(status: string) {
    if (status === 'in') return 'bg-success';
    if (status === 'low') return 'bg-warning';
    return 'bg-danger';
  }

  getStatusLabel(status: string) {
    if (this.currentLang === 'ar') {
      if (status === 'in') return 'متوفر';
      if (status === 'low') return 'كمية قليلة';
      return 'غير متوفر';
    }

    if (status === 'in') return 'In Stock';
    if (status === 'low') return 'Low Stock';
    return 'Out of Stock';
  }
}
