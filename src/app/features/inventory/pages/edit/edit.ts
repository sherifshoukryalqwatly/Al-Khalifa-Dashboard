import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [RouterModule,FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class EditInventory {
   // ✅ Static pre-filled data
  inventory = {
    productName: 'iPhone 15 Pro',
    sku: 'IP15-PRO-256',
    quantity: 12,
    lowStock: 5,
    location: 'Main Warehouse',
    active: true
  };

  updateInventory() {
    console.log('Updated Inventory:', this.inventory);
    alert('Inventory updated successfully (Static Mode)');
  }
}
