import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  product = {
    name: 'iPhone 15 Pro',
    description: 'Premium smartphone',
    category: 'Electronics',
    brand: 'Apple',
    price: 1199,
    discount: 10,
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    active: true
  };
  categories = ['Electronics', 'Accessories', 'Clothing', 'Books'];

  constructor(private route: ActivatedRoute){}
  productId!: string;
  images: string[] = [];

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!;

    // API CALL
    // this.productService.getById(this.productId).subscribe(product => {
    //   this.form.patchValue(product);
    //   this.images = product.images;
    // });
  }

  onImagesSelected(event: any) {
  const files: FileList = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = (e: any) => this.product.images.push(e.target.result);
    reader.readAsDataURL(files[i]);
  }
}

removeImage(index: number) {
  this.product.images.splice(index, 1);
}

updateProduct() {
  console.log('Updated Product:', this.product);
  // Call API here to update
}
}
