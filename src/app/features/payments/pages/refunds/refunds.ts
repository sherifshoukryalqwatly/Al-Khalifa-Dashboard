import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-refunds',
  imports: [CommonModule,RouterModule],
  templateUrl: './refunds.html',
  styleUrl: './refunds.css',
})
export class Refunds {
   refunds = [
    {
      id: 'REF-1001',
      orderId: 'ORD-100245',
      customer: 'Mohamed Hassan',
      amount: 1450,
      reason: 'Damaged product',
      status: 'Pending',
      date: '2025-12-13'
    },
    {
      id: 'REF-1002',
      orderId: 'ORD-100212',
      customer: 'Sara Ahmed',
      amount: 780,
      reason: 'Wrong item',
      status: 'Approved',
      date: '2025-12-10'
    }
  ];
}
