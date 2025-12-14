import { Component } from '@angular/core';
import { AnalyticsRoutingModule } from "../../../analytics/analytics-routing-module";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-methods',
  imports: [AnalyticsRoutingModule,RouterModule],
  templateUrl: './methods.html',
  styleUrl: './methods.css',
})
export class Methods {

}
