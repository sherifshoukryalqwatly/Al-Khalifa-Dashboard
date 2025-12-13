import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-general',
  imports: [ RouterModule],
  templateUrl: './general.html',
  styleUrl: './general.css',
})
export class General {

  constructor(private router: Router) {}

  testNav() {
    this.router.navigate(['/settings/store']);
  }
}
