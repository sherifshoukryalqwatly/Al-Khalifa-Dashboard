import { Component } from '@angular/core';
import { AnalyticsRoutingModule } from "../../../analytics/analytics-routing-module";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [AnalyticsRoutingModule,RouterModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ReviewList {

}
