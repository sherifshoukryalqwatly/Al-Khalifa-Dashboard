import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [FormsModule,RouterModule],
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('id')!;

    // GET /categories/:id
    // this.categoryService.getById(this.categoryId).subscribe(res => {
    //   this.category = res;
    // });
  }

  updateCategory() {
    console.log('Updating:', this.categoryId, this.category);
    // PUT /categories/:id
  }
}
