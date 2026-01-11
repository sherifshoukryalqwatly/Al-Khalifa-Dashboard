import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit',
  imports: [FormsModule,RouterModule,CommonModule,TranslateModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class EditUser {
  // ✅ Static pre-filled user
  user = {
    name: 'Ahmed Ali',
    email: 'ahmed.ali@example.com',
    phone: '+20 100 123 4567',
    role: 'Admin',
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

  updateUser() {
    console.log('Updated User:', this.user);
    alert('User updated successfully (Static Mode)');
  }
}
