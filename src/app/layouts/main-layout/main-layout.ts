import { Component,Inject,OnInit, PLATFORM_ID  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { Footer } from "../../shared/components/footer/footer";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar, Sidebar, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout implements OnInit {
  isSidebarCollapsed = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    if (window.innerWidth < 768) {
      this.isSidebarCollapsed = true;
    }
  }
}

  onSidebarToggle(collapsed: boolean) {
    this.isSidebarCollapsed = collapsed;
  }
}
