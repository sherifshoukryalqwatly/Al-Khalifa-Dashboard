import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [FormsModule,RouterModule],
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

  updateCoupon() {
    console.log('Updated Coupon:', this.coupon);
    alert('Coupon updated successfully (Static Mode)');
  }
}
