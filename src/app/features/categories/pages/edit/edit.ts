import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit',
  imports: [FormsModule,RouterModule,CommonModule,TranslateModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class EditCategories {
  categoryId!: string;

  category = {
    name: '',
    description: '',
    active: true
  };
  isRtl = false;

  constructor(private route: ActivatedRoute,private translate: TranslateService) {}
  
  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('id')!;
    this.setDir(this.translate.currentLang);
    this.translate.onLangChange.subscribe(e => this.setDir(e.lang));

    // GET /categories/:id
    // this.categoryService.getById(this.categoryId).subscribe(res => {
    //   this.category = res;
    // });
  }
  setDir(lang: string) {
    this.isRtl = lang === 'ar';
  }

  updateCategory() {
    console.log('Updating:', this.categoryId, this.category);
    // PUT /categories/:id
  }
}
