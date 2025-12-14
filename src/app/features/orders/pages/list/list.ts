import { Component } from '@angular/core';
import { AnalyticsRoutingModule } from "../../../analytics/analytics-routing-module";

@Component({
  selector: 'app-list',
  imports: [AnalyticsRoutingModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ListOrders {

}
