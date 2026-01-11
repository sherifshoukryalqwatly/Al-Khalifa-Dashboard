import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [RouterModule,CommonModule,TranslateModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  stats = [
  { label: 'usersAnalytics.stats.total', value: 12450, icon: 'bi-people fs-2 text-primary' },
  { label: 'usersAnalytics.stats.active', value: 8320, icon: 'bi-person-check fs-2 text-success' },
  { label: 'usersAnalytics.stats.new', value: 1240, icon: 'bi-person-plus fs-2 text-info' },
  { label: 'usersAnalytics.stats.blocked', value: 120, icon: 'bi-person-x fs-2 text-danger' },
];

recentUsers = [
    {
      name: 'Ahmed Ali',
      email: 'ahmed@email.com',
      status: 'usersAnalytics.status.active',
      statusClass: 'bg-success',
      joined: 'usersAnalytics.joined.daysAgo'
    },
    {
      name: 'Sara Mohamed',
      email: 'sara@email.com',
      status: 'usersAnalytics.status.pending',
      statusClass: 'bg-warning',
      joined: 'usersAnalytics.joined.weekAgo'
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
