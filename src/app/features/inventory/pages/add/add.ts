import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [RouterModule,FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class AddInventory {
   inventory = {
    productName: '',
    sku: '',
    quantity: 0,
    lowStock: 5,
    location: 'Main Warehouse',
    active: true
  };

  createInventory() {
    console.log('New Inventory:', this.inventory);
    alert('Inventory item added successfully (Static Mode)');

    this.inventory = {
      productName: '',
      sku: '',
      quantity: 0,
      lowStock: 5,
      location: 'Main Warehouse',
      active: true
    };
  }
}
