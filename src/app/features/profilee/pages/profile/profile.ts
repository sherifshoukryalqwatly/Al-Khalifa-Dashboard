import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  imports: [RouterModule,CommonModule,TranslateModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
   user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Administrator',
    phone: '+1 234 567 890',
    joined: 'January 2025',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=12'
  };
}
