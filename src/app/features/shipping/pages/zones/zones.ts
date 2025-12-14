import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-zones',
  imports: [CommonModule,RouterModule],
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
}
