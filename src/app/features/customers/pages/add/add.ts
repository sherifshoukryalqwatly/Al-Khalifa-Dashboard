import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [FormsModule,FormsModule,RouterModule,CommonModule,TranslateModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class AddUser {
  user = {
    name: '',
    email: '',
    phone: '',
    role: 'User',
    password: '',
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
  createUser() {
    console.log('New User:', this.user);
    alert('User created successfully (Static Mode)');

    this.user = {
      name: '',
      email: '',
      phone: '',
      role: 'User',
      password: '',
      active: true
    };
  }
}
