import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LangService } from '../../../core/services/lang-service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,TranslateModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Output() toggleSidebar = new EventEmitter<void>();
  currentLang: 'en' | 'ar' = 'en';
  notifications = [
    {
      title: 'New Order',
      subtitle: 'Order #1245 placed',
      time: '2 mins ago',
      icon: 'bi-cart text-primary'
    },
    {
      title: 'Payment Received',
      subtitle: '$250 paid',
      time: '1 hour ago',
      icon: 'bi-credit-card text-success'
    },
    {
      title: 'Shipment Sent',
      subtitle: 'Order #1234 shipped',
      time: '3 hours ago',
      icon: 'bi-truck text-warning'
    }
  ];
  constructor(private lang: LangService){
    this.lang.lang$.subscribe(l => this.currentLang = l);
  }
  // Add this method
  onToggleClick() {
    this.toggleSidebar.emit(); // emits event to parent
  }
  changeLang(lang: 'en' | 'ar') {
    this.lang.setLang(lang);
  }
}
