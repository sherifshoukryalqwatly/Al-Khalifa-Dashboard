import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class EditShipping {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: [''],
      phone: [''],
      addressLine1: [''],
      addressLine2: [''],
      city: [''],
      state: [''],
      postalCode: [''],
      country: [''],
      deliveryNotes: ['']
    });
  }

  save() {
    console.log('Saved Shipping:', this.form.value);
    alert('Shipping details saved successfully');
  }
}
