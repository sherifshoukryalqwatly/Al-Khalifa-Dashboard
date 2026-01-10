import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-general',
  imports: [ RouterModule,TranslateModule,CommonModule],
  templateUrl: './general.html',
  styleUrl: './general.css',
})
export class General {
  settingCards = [
    {
      key: 'store',
      icon: 'bi-shop',
      color: 'text-primary',
      titleKey: 'SETTINGS.STORE.TITLE',
      descKey: 'SETTINGS.STORE.DESC',
      btnKey: 'SETTINGS.STORE.BTN',
      link: '/settings/store',
      btnClass: 'btn-outline-primary'
    },
    {
      key: 'payment',
      icon: 'bi-credit-card',
      color: 'text-success',
      titleKey: 'SETTINGS.PAYMENT.TITLE',
      descKey: 'SETTINGS.PAYMENT.DESC',
      btnKey: 'SETTINGS.PAYMENT.BTN',
      link: '/settings/payment',
      btnClass: 'btn-outline-success'
    },
    {
      key: 'email',
      icon: 'bi-envelope',
      color: 'text-warning',
      titleKey: 'SETTINGS.EMAIL.TITLE',
      descKey: 'SETTINGS.EMAIL.DESC',
      btnKey: 'SETTINGS.EMAIL.BTN',
      link: '/settings/email',
      btnClass: 'btn-outline-warning'
    }
  ];

  constructor(private router: Router) {}

  testNav() {
    this.router.navigate(['/settings/store']);
  }
}
