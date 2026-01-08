import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class PaymentDetails {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      method: [''],
      cardName: [''],
      cardNumber: [''],
      expiry: [''],
      cvv: [''],
      billingAddress: ['']
    });
  }

  save() {
    console.log('Saved Payment Details:', this.form.value);
    alert('Payment details saved successfully');
  }
}
