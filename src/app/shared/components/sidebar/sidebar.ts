import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { AnalyticsRoutingModule } from "../../../features/analytics/analytics-routing-module";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  imports: [AnalyticsRoutingModule,CommonModule,TranslateModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  @Input() isCollapsed = false;
  @Input() direction: 'ltr' | 'rtl' = 'ltr';
  @Output() collapsedChange = new EventEmitter<boolean>();
  logoutLabel = 'SIDEBAR.LOGOUT';
  isMobileOpen = false;
  menu = [
      { label: 'SIDEBAR.DASHBOARD', link: 'dashboard', icon: 'bi-speedometer2' },
      { label: 'SIDEBAR.ANALYTICS', link: '/analytics', icon: 'bi-bar-chart' },
      { label: 'SIDEBAR.PRODUCTS', link: '/products', icon: 'bi-box' },
      { label: 'SIDEBAR.USERS', link: '/customers', icon: 'bi-people' },
      { label: 'SIDEBAR.CATEGORIES', link: '/categories', icon: 'bi-grid' },
      { label: 'SIDEBAR.ORDERS', link: '/orders', icon: 'bi-cart' },
      { label: 'SIDEBAR.COUPONS', link: '/coupons', icon: 'bi-tag' },
      { label: 'SIDEBAR.INVENTORY', link: '/inventory', icon: 'bi-box-seam' },
      { label: 'SIDEBAR.PAYMENTS', link: '/payments', icon: 'bi-credit-card' },
      { label: 'SIDEBAR.REVIEWS', link: '/reviews', icon: 'bi-star' },
      { label: 'SIDEBAR.SHIPPING', link: '/shipping', icon: 'bi-truck' },
      { label: 'SIDEBAR.SETTINGS', link: '/settings', icon: 'bi-gear' },
      { label: 'SIDEBAR.SUPPORT', link: '/support', icon: 'bi-headset' }
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
