import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list',
  imports: [RouterModule,TranslateModule,CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class CoupnesList {
   currentLang: 'en' | 'ar' = 'en';

  constructor(private translate: TranslateService) {
    this.currentLang = (this.translate.currentLang as 'en' | 'ar') || 'en';

    this.translate.onLangChange.subscribe(e => {
      this.currentLang = e.lang as 'en' | 'ar';
    });
  }

  coupons = [
    {
      id: 1,
      code: 'NEWYEAR2025',
      discount: 20,
      expiry: '31-12-2025',
      status: 'active'
    },
    {
      id: 2,
      code: 'SUMMER2025',
      discount: 15,
      expiry: '30-06-2025',
      status: 'inactive'
    }
  ];

  getStatusClass(status: string) {
    return status === 'active' ? 'bg-success' : 'bg-warning';
  }

  getStatusLabel(status: string) {
    if (this.currentLang === 'ar') {
      return status === 'active' ? 'نشط' : 'غير نشط';
    }
    return status === 'active' ? 'Active' : 'Inactive';
  }
}
