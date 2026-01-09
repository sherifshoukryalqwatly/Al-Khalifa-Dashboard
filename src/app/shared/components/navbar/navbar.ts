import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LangService } from '../../../core/services/lang-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Output() toggleSidebar = new EventEmitter<void>();
  currentLang: 'en' | 'ar' = 'en';
  constructor(private lang: LangService){
    this.lang.lang$.subscribe(l => this.currentLang = l);
  }
  // Add this method
  onToggleClick() {
    this.toggleSidebar.emit(); // emits event to parent
  }
  changeLang(lang: 'en' | 'ar') {
    this.lang.setLang(lang);
  }
}
