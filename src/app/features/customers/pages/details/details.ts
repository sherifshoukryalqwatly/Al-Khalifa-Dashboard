import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-details',
  imports: [CommonModule,RouterModule,TranslateModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class CustomerDetails {
  user = {
    name: 'Ahmed Ali',
    email: 'ahmed.ali@example.com',
    role: 'Admin',
    phone: '+20 100 123 4567',
    active: true,
    createdAt: '2024-06-15',
    lastLogin: '2025-12-12',
    avatar: 'https://i.pravatar.cc/150?img=12'
  };
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
