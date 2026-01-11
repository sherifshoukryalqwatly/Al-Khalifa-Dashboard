import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit',
  imports: [RouterModule,ReactiveFormsModule,TranslateModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class EditShipping {
  form!: FormGroup;
  isRtl = false;
  
  
  constructor(private fb: FormBuilder,private translate: TranslateService) {
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

  ngOnInit() {
    this.setDir(this.translate.currentLang);
    this.translate.onLangChange.subscribe(e => this.setDir(e.lang));
  }

  setDir(lang: string) {
    this.isRtl = lang === 'ar';
  }

  save() {
    console.log('Saved Shipping:', this.form.value);
    alert('Shipping details saved successfully');
  }
}
