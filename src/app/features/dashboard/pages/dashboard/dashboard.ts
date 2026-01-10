import { Component } from '@angular/core';
import { AnalyticsRoutingModule } from "../../../analytics/analytics-routing-module";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  imports: [AnalyticsRoutingModule,CommonModule,TranslateModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
 kpiCards = [
    { labelKey: 'DASHBOARD.TOTAL_SALES', value: '$24,300', icon: 'bi-currency-dollar' },
    { labelKey: 'DASHBOARD.ORDERS', value: '1,240', icon: 'bi-cart-check' },
    { labelKey: 'DASHBOARD.CUSTOMERS', value: '820', icon: 'bi-people' },
    { labelKey: 'DASHBOARD.REVIEWS', value: '4.8 / 5', icon: 'bi-star-fill' }
  ];


  recentOrders = [
    { id: '#1024', customer: 'Ahmed Ali', statusCode: 'COMPLETED', total: '$120' },
    { id: '#1025', customer: 'Sara Mohamed', statusCode: 'PENDING', total: '$75' },
    { id: '#1026', customer: 'John Smith', statusCode: 'CANCELLED', total: '$40' }
  ];
  statusClasses: Record<string, string> = {
    COMPLETED: 'bg-success',
    PENDING: 'bg-warning',
    CANCELLED: 'bg-danger'
  };

  quickActions = [
    { labelKey: 'QUICK.ADD_PRODUCT', link: '/products/add', icon: 'bi-plus-circle', class: 'btn-primary' },
    { labelKey: 'QUICK.INVENTORY', link: '/inventory', icon: 'bi-box-seam', class: 'btn-outline-secondary' },
    { labelKey: 'QUICK.VIEW_ANALYTICS', link: '/analytics', icon: 'bi-bar-chart', class: 'btn-outline-dark' }
  ];

  
}
