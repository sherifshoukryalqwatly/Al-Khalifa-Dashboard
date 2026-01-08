import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class OrderEdit implements OnInit {

  form!: FormGroup;
  orderId!: string;
  loading = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id') || '1';
    this.initForm();
  }

  initForm() {
    const order = {
      status: 'pending',
      paymentMethod: 'Cash',
      items: [
        { name: 'Product A', price: 100, quantity: 2 },
        { name: 'Product B', price: 50, quantity: 1 }
      ]
    };

    this.form = this.fb.group({
      status: [order.status],
      paymentMethod: [order.paymentMethod],
      items: this.fb.array(order.items.map(i =>
        this.fb.group({
          name: [i.name],
          price: [i.price],
          quantity: [i.quantity]
        })
      ))
    });

    this.loading = false;
  }

  get items() {
    return this.form.get('items') as FormArray;
  }

  get subtotal() {
    return this.items.value.reduce(
      (sum: number, i: any) => sum + i.price * i.quantity,
      0
    );
  }

  updateOrder() {
    console.log('Updated Order:', this.form.value);
    alert('Order updated successfully (Static Mode)');
  }
}
