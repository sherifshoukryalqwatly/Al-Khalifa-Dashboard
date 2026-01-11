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
export class AddCategories {
  // ✅ Static model
  category = {
    name: '',
    description: '',
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

  createCategory() {
    // ✅ Simulate saving
    console.log('New Category:', this.category);

    alert('Category created successfully (Static Mode)');

    // ✅ Reset form (optional)
    this.category = {
      name: '',
      description: '',
      active: true
    };
  }

}
