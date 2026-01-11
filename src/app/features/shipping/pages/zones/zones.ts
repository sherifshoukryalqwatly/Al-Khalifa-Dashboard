import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-zones',
  imports: [CommonModule,RouterModule,TranslateModule],
  templateUrl: './zones.html',
  styleUrl: './zones.css',
})
export class Zones {
  zones = [
    {
      id: 'ZONE-001',
      name: 'Cairo & Giza',
      fee: 60,
      delivery: '1-2 Days',
      active: true
    },
    {
      id: 'ZONE-002',
      name: 'Alexandria',
      fee: 70,
      delivery: '2-3 Days',
      active: true
    },
    {
      id: 'ZONE-003',
      name: 'Upper Egypt',
      fee: 100,
      delivery: '3-5 Days',
      active: false
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
