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
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Navbar, Sidebar, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout implements OnInit {

  isSidebarCollapsed = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

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
