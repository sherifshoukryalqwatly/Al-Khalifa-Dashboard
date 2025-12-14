import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [FormsModule,FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class AddUser {
  user = {
    name: '',
    email: '',
    phone: '',
    role: 'User',
    password: '',
    active: true
  };

  createUser() {
    console.log('New User:', this.user);
    alert('User created successfully (Static Mode)');

    this.user = {
      name: '',
      email: '',
      phone: '',
      role: 'User',
      password: '',
      active: true
    };
  }
}
