import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-analytics',
  imports: [RouterModule,TranslateModule,CommonModule],
  templateUrl: './analytics.html',
  styleUrl: './analytics.css',
})
export class Analytics {
  analyticsCards = [
    { labelKey: 'ANALYTICS.TOTAL_REVENUE', value: '$245,300', icon: 'bi-currency-dollar', color: 'text-success' },
    { labelKey: 'ANALYTICS.ORDERS', value: '3,420', icon: 'bi-bag-check', color: 'text-primary' },
    { labelKey: 'ANALYTICS.USERS', value: '12,450', icon: 'bi-people', color: 'text-info' },
    { labelKey: 'ANALYTICS.PRODUCTS', value: '1,250', icon: 'bi-box-seam', color: 'text-warning' }
  ];

  analyticsLinks = [
    { link: '/analytics/users', icon: 'bi-people', color: 'text-primary', titleKey: 'ANALYTICS.USERS_ANALYTICS', subtitleKey: 'ANALYTICS.USERS_SUB' },
    { link: '/analytics/products', icon: 'bi-box-seam', color: 'text-warning', titleKey: 'ANALYTICS.PRODUCTS_ANALYTICS', subtitleKey: 'ANALYTICS.PRODUCTS_SUB' },
    { link: '/analytics/sales', icon: 'bi-graph-up-arrow', color: 'text-success', titleKey: 'ANALYTICS.SALES_ANALYTICS', subtitleKey: 'ANALYTICS.SALES_SUB' }
  ];

  insights = [
    'ANALYTICS.INSIGHT_REVENUE',
    'ANALYTICS.INSIGHT_USERS',
    'ANALYTICS.INSIGHT_STOCK'
  ];
}
