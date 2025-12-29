import { Component } from '@angular/core';
import { AnalyticsRoutingModule } from "../../../analytics/analytics-routing-module";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [AnalyticsRoutingModule,CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  kpiCards = [
    { label: 'Total Sales', value: '$24,300', icon: 'bi-currency-dollar' },
    { label: 'Orders', value: '1,240', icon: 'bi-cart-check' },
    { label: 'Customers', value: '820', icon: 'bi-people' },
    { label: 'Reviews', value: '4.8 / 5', icon: 'bi-star-fill' }
  ];

  recentOrders = [
    { id: '#1024', customer: 'Ahmed Ali', status: 'Completed', total: '$120' },
    { id: '#1025', customer: 'Sara Mohamed', status: 'Pending', total: '$75' },
    { id: '#1026', customer: 'John Smith', status: 'Cancelled', total: '$40' }
  ];

  quickActions = [
    { label: 'Add Product', link: '/products/add', icon: 'bi-plus-circle', class: 'btn-primary' },
    { label: 'Inventory', link: '/inventory', icon: 'bi-box-seam', class: 'btn-outline-secondary' },
    { label: 'View Analytics', link: '/analytics', icon: 'bi-bar-chart', class: 'btn-outline-dark' }
  ];
  
}
