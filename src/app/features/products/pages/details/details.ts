import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [RouterModule,CommonModule,TranslateModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  isRtl = false;

  product = {
    name: 'iPhone 15 Pro',
    price: 1199,
    description: 'Premium smartphone with advanced camera and titanium design.',
    fullDescription: 'Full product description goes here...',
    category: 'Electronics',
    brand: 'Apple',
    stock: 125,
    sku: 'IP15-PRO-256'
  };

  stats = [
    { label: 'PRODUCT.STATS.ORDERS', value: 542, icon: 'bi-bag-check fs-3 text-primary' },
    { label: 'PRODUCT.STATS.REVENUE', value: '$42,500', icon: 'bi-currency-dollar fs-3 text-success' },
    { label: 'PRODUCT.STATS.RATING', value: '4.7 / 5', icon: 'bi-star fs-3 text-warning' },
    { label: 'PRODUCT.STATS.VIEWS', value: 8920, icon: 'bi-eye fs-3 text-info' }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.setDir(this.translate.currentLang);
    this.translate.onLangChange.subscribe(e => this.setDir(e.lang));
  }

  private setDir(lang: string) {
    this.isRtl = lang === 'ar';
  }
}
