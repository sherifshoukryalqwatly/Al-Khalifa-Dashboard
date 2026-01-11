import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,TranslateModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class PaymentDetails {

  form!: FormGroup;
  isRtl = false;
    
  constructor(private fb: FormBuilder,private translate: TranslateService) {
    this.form = this.fb.group({
      method: [''],
      cardName: [''],
      cardNumber: [''],
      expiry: [''],
      cvv: [''],
      billingAddress: ['']
    });
  }
  ngOnInit() {
    this.setDir(this.translate.currentLang);
    this.translate.onLangChange.subscribe(e => this.setDir(e.lang));
  }

  setDir(lang: string) {
    this.isRtl = lang === 'ar';
  }

  save() {
    console.log('Saved Payment Details:', this.form.value);
    alert('Payment details saved successfully');
  }
}
