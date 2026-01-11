import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit',
  imports: [RouterModule,FormsModule,CommonModule,TranslateModule],
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
   isRtl = false;
  constructor(private translate: TranslateService) {}
  
  ngOnInit() {
    this.setDir(this.translate.currentLang);
    this.translate.onLangChange.subscribe(e => this.setDir(e.lang));
  }

  setDir(lang: string) {
    this.isRtl = lang === 'ar';
  }

  updateInventory() {
    console.log('Updated Inventory:', this.inventory);
    alert('Inventory updated successfully (Static Mode)');
  }
}
