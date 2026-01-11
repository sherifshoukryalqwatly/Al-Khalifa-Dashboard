import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add',
  imports: [RouterModule,FormsModule,CommonModule,TranslateModule],
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
   isRtl = false;
    constructor(private translate: TranslateService) {}
    
    ngOnInit() {
      this.setDir(this.translate.currentLang);
      this.translate.onLangChange.subscribe(e => this.setDir(e.lang));
    }
  
    setDir(lang: string) {
      this.isRtl = lang === 'ar';
    }

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
