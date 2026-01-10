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
export class ReviewList {
  currentLang: 'en' | 'ar' = 'en';

  constructor(private translate: TranslateService) {
    this.currentLang = (this.translate.currentLang as 'en' | 'ar') || 'en';
    this.translate.onLangChange.subscribe(e => {
      this.currentLang = e.lang as 'en' | 'ar';
    });
  }

  reviews = [
    {
      id: 1,
      product: { en: 'iPhone 14', ar: 'آيفون 14' },
      customer: 'Ahmed Ali',
      rating: 4,
      comment: { en: 'Good product', ar: 'منتج جيد' },
      status: 'pending'
    },
    {
      id: 2,
      product: { en: 'Adidas Shoes', ar: 'أحذية أديداس' },
      customer: 'Sara Mohamed',
      rating: 3,
      comment: { en: 'Average quality', ar: 'جودة متوسطة' },
      status: 'approved'
    }
  ];

  getStars(rating: number) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

  getStatusClass(status: string) {
    if (status === 'approved') return 'bg-success';
    if (status === 'pending') return 'bg-warning';
    return 'bg-danger';
  }

  getStatusLabel(status: string) {
    if (this.currentLang === 'ar') {
      if (status === 'approved') return 'مقبول';
      if (status === 'pending') return 'قيد المراجعة';
      return 'مرفوض';
    }

    if (status === 'approved') return 'Approved';
    if (status === 'pending') return 'Pending';
    return 'Rejected';
  }
}
