import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-zones',
  imports: [FormsModule,RouterModule,CommonModule,TranslateModule],
  templateUrl: './add-zones.html',
  styleUrl: './add-zones.css',
})
export class AddZones {
  zone = {
    name: '',
    fee: 0,
    delivery: '',
    active: true
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

  createZone() {
    console.log('New Shipping Zone:', this.zone);
    alert('Shipping zone added successfully (Static Mode)');

    this.zone = {
      name: '',
      fee: 0,
      delivery: '',
      active: true
    };
  }
}
