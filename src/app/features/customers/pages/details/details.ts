import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class CustomerDetails {
  user = {
    name: 'Ahmed Ali',
    email: 'ahmed.ali@example.com',
    role: 'Admin',
    phone: '+20 100 123 4567',
    active: true,
    createdAt: '2024-06-15',
    lastLogin: '2025-12-12',
    avatar: 'https://i.pravatar.cc/150?img=12'
  };
}
