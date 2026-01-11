import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sales',
  imports: [RouterModule,CommonModule,TranslateModule],
  templateUrl: './sales.html',
  styleUrl: './sales.css',
})
export class Sales {
  ranges = [
  { key: 'salesAnalytics.range.today' },
  { key: 'salesAnalytics.range.last7' },
  { key: 'salesAnalytics.range.last30' },
  { key: 'salesAnalytics.range.year' }
];

selectedRange = 'salesAnalytics.range.last30';

selectRange(key: string) {
  this.selectedRange = key;
}

stats = [
  { label: 'salesAnalytics.stats.revenue', value: '$245,300', icon: 'bi-currency-dollar fs-2 text-success' },
  { label: 'salesAnalytics.stats.orders', value: '3,420', icon: 'bi-bag-check fs-2 text-primary' },
  { label: 'salesAnalytics.stats.avg', value: '$72', icon: 'bi-graph-up fs-2 text-info' },
  { label: 'salesAnalytics.stats.refunds', value: '$12,400', icon: 'bi-arrow-counterclockwise fs-2 text-danger' }
];

breakdown = [
  { date: '2025-01-01', orders: 120, revenue: '$8,400', refunds: '-$500', net: '$7,900' },
  { date: '2025-01-02', orders: 150, revenue: '$10,200', refunds: '-$300', net: '$9,900' }
];
  isRtl = false;

    constructor(private translate: TranslateService) {}

    ngOnInit() {
      this.setDir(this.translate.currentLang);
      this.translate.onLangChange.subscribe(e => this.setDir(e.lang));
    }

    setDir(lang: string) {
      this.isRtl = lang === 'ar';
    }
}
