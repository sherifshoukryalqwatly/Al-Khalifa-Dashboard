import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reported',
  imports: [CommonModule,RouterModule],
  templateUrl: './reported.html',
  styleUrl: './reported.css',
})
export class ReviewReported {
   reports = [
    {
      id: 'REP-001',
      product: 'iPhone 15 Pro',
      reviewer: 'Ahmed Ali',
      rating: 1,
      reason: 'Offensive language',
      status: 'Pending',
      date: '2025-12-14'
    },
    {
      id: 'REP-002',
      product: 'Samsung S24',
      reviewer: 'Sara Ahmed',
      rating: 2,
      reason: 'Spam / Advertisement',
      status: 'Resolved',
      date: '2025-12-13'
    }
  ];
}
