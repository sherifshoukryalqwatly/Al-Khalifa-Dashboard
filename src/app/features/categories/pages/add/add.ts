import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [RouterModule,FormsModule],
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
