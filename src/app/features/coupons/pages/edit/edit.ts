import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit',
  imports: [FormsModule,RouterModule,CommonModule,TranslateModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class EditCoupne {
  // ✅ Static pre-filled data
  coupon = {
    code: 'SAVE20',
    discount: 20,
    type: 'percentage',
    expiresAt: '2025-12-31',
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

  updateCoupon() {
    console.log('Updated Coupon:', this.coupon);
    alert('Coupon updated successfully (Static Mode)');
  }
}
