import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [FormsModule,RouterModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class EditUser {
  // ✅ Static pre-filled user
  user = {
    name: 'Ahmed Ali',
    email: 'ahmed.ali@example.com',
    phone: '+20 100 123 4567',
    role: 'Admin',
    active: true
  };

  updateUser() {
    console.log('Updated User:', this.user);
    alert('User updated successfully (Static Mode)');
  }
}
