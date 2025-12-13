import { Component } from '@angular/core';
import { AnalyticsRoutingModule } from "../../../features/analytics/analytics-routing-module";

@Component({
  selector: 'app-sidebar',
  imports: [AnalyticsRoutingModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

}
