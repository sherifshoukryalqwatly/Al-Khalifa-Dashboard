import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-refund-details',
  imports: [CommonModule,RouterModule,TranslateModule],
  templateUrl: './refund-details.html',
  styleUrl: './refund-details.css',
})
export class RefundDetails {
  refund = {
    id: 'REF-1001',
    orderId: 'ORD-100245',
    customer: 'Mohamed Hassan',
    email: 'mohamed@example.com',
    amount: 1450,
    paymentMethod: 'Credit Card',
    reason: 'Damaged product',
    status: 'Pending',
    requestedAt: '2025-12-13'
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

  approveRefund() {
    this.refund.status = 'Approved';
    alert('Refund approved (Static Mode)');
  }

  rejectRefund() {
    this.refund.status = 'Rejected';
    alert('Refund rejected (Static Mode)');
  }
}
