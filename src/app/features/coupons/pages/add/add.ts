import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [FormsModule,RouterModule],
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
