import { Component, EventEmitter, Output } from '@angular/core';
import { AnalyticsRoutingModule } from "../../../features/analytics/analytics-routing-module";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [AnalyticsRoutingModule,CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isCollapsed = false;

  @Output() collapsedChange = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed);
  }

  menu = [
    { label: 'Dashboard', link: 'dashboard', icon: 'bi-speedometer2' },
    { label: 'Analytics', link: '/analytics', icon: 'bi-bar-chart' },
    { label: 'Products', link: '/products', icon: 'bi-box' },
    { label: 'Users', link: '/customers', icon: 'bi-people' },
    { label: 'Categories', link: '/categories', icon: 'bi-grid' },
    { label: 'Orders', link: '/orders', icon: 'bi-cart' },
    { label: 'Coupons', link: '/coupons', icon: 'bi-tag' },
    { label: 'Inventory', link: '/inventory', icon: 'bi-box-seam' },
    { label: 'Payments', link: '/payments', icon: 'bi-credit-card' },
    { label: 'Reviews', link: '/reviews', icon: 'bi-star' },
    { label: 'Shipping', link: '/shipping', icon: 'bi-truck' },
    { label: 'Settings', link: '/settings', icon: 'bi-gear' },
  ];
}
