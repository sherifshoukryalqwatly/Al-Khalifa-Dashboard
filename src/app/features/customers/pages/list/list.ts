import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class CustomersList {
  currentLang: 'en' | 'ar' = 'en';

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang as 'en' | 'ar' || 'en';

    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang as 'en' | 'ar';
    });
  }

  users = [
    {
      id: 1,
      avatar: 'https://via.placeholder.com/40',
      name: { en: 'Sherif Shoukry', ar: 'شريف شكري' },
      email: 'sherif@example.com',
      role: { en: 'Admin', ar: 'مدير' },
      status: 'active'
    },
    {
      id: 2,
      avatar: 'https://via.placeholder.com/40',
      name: { en: 'Sara Mohamed', ar: 'سارة محمد' },
      email: 'sara@example.com',
      role: { en: 'User', ar: 'مستخدم' },
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
