import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add',
  imports: [FormsModule,RouterModule,CommonModule,TranslateModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class AddCoupne {
  coupon = {
    code: '',
    discount: 0,
    type: 'percentage',
    expiresAt: '',
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

  createCoupon() {
    console.log('New Coupon:', this.coupon);
    alert('Coupon created successfully (Static Mode)');

    // reset
    this.coupon = {
      code: '',
      discount: 0,
      type: 'percentage',
      expiresAt: '',
      active: true
    };
  }
}
