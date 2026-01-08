import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-zones',
  imports: [FormsModule,RouterModule],
  templateUrl: './add-zones.html',
  styleUrl: './add-zones.css',
})
export class AddZones {
  zone = {
    name: '',
    fee: 0,
    delivery: '',
    active: true
  };

  createZone() {
    console.log('New Shipping Zone:', this.zone);
    alert('Shipping zone added successfully (Static Mode)');

    this.zone = {
      name: '',
      fee: 0,
      delivery: '',
      active: true
    };
  }
}
