import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  imports: [RouterModule,CommonModule,TranslateModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  stats = [
  { label: 'productsAnalytics.stats.total', value: 1250, icon: 'bi-box-seam fs-2 text-primary' },
  { label: 'productsAnalytics.stats.active', value: 980, icon: 'bi-check-circle fs-2 text-success' },
  { label: 'productsAnalytics.stats.out', value: 170, icon: 'bi-exclamation-triangle fs-2 text-warning' },
  { label: 'productsAnalytics.stats.archived', value: 100, icon: 'bi-archive fs-2 text-secondary' },
];

topProducts = [
    {
      name: 'iPhone 15',
      category: 'productsAnalytics.category.electronics',
      sales: 420,
      revenue: '$120,000',
      status: 'productsAnalytics.status.active',
      statusClass: 'bg-success'
    },
    {
      name: 'Nike Air Max',
      category: 'productsAnalytics.category.fashion',
      sales: 310,
      revenue: '$45,600',
      status: 'productsAnalytics.status.lowStock',
      statusClass: 'bg-warning'
    }
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
