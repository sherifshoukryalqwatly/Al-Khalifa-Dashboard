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
export class ListCategories {
  currentLang: 'en' | 'ar' = 'en';

  constructor(private translate: TranslateService) {
    this.currentLang = (this.translate.currentLang as 'en' | 'ar') || 'en';

    this.translate.onLangChange.subscribe(e => {
      this.currentLang = e.lang as 'en' | 'ar';
    });
  }

  categories = [
    {
      id: 1,
      name: { en: 'Electronics', ar: 'إلكترونيات' },
      description: {
        en: 'Smartphones, laptops, gadgets',
        ar: 'هواتف ذكية، لابتوبات، أجهزة'
      },
      status: 'active'
    },
    {
      id: 2,
      name: { en: 'Fashion', ar: 'أزياء' },
      description: {
        en: 'Clothing, shoes, accessories',
        ar: 'ملابس، أحذية، إكسسوارات'
      },
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
