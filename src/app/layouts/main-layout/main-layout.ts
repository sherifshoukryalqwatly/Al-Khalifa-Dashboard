import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { Footer } from "../../shared/components/footer/footer";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LangService } from '../../core/services/lang-service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Navbar, Sidebar, Footer,CommonModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout implements OnInit {

  isSidebarCollapsed = false;
  direction: 'ltr' | 'rtl' = 'ltr';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private lang: LangService
  ) {
      this.lang.lang$.subscribe(l => {
      this.direction = l === 'ar' ? 'rtl' : 'ltr';
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateSidebarByWidth(window.innerWidth);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSidebarByWidth(event.target.innerWidth);
  }

  updateSidebarByWidth(width: number) {
    const shouldCollapse = width < 768;
    if (this.isSidebarCollapsed !== shouldCollapse) {
      this.isSidebarCollapsed = shouldCollapse;
      this.cdr.markForCheck();
    }
  }

  onSidebarToggle(collapsed: boolean) {
    this.isSidebarCollapsed = collapsed;
    this.cdr.markForCheck();
  }
}
