import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class OrderDetails {
   order = {
    id: 'ORD-100245',
    status: 'Pending',
    createdAt: '2025-12-12',
    paymentMethod: 'Credit Card',
    total: 1450,
    customer: {
      name: 'Mohamed Hassan',
      email: 'mohamed@example.com',
      phone: '+20 101 555 9988',
      address: 'Nasr City, Cairo, Egypt'
    },
    items: [
      {
        name: 'iPhone 15 Pro',
        price: 1200,
        quantity: 1
      },
      {
        name: 'Wireless Charger',
        price: 250,
        quantity: 1
      }
    ]
  };

  get subtotal() {
    return this.order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }
}
