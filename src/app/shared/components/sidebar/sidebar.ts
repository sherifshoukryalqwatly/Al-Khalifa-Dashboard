import { Component, EventEmitter, HostListener, Output } from '@angular/core';
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
  isMobileOpen = false;

  @Output() collapsedChange = new EventEmitter<boolean>();

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
    { label: 'Support', link: '/support', icon: 'bi-headset' },
  ];

  toggleSidebar() {
    if (window.innerWidth < 768) {
      this.isMobileOpen = !this.isMobileOpen;
    } else {
      this.isCollapsed = !this.isCollapsed;
      this.collapsedChange.emit(this.isCollapsed);
    }
  }

  closeMobile() {
    this.isMobileOpen = false;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 768) {
      this.isMobileOpen = false;
    }
  }
}
