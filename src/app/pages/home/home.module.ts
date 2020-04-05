import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {NbCardModule} from '@nebular/theme';
import {ChartsModule} from '../charts/charts.module';
import {BarChartModule} from "@swimlane/ngx-charts";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    ChartsModule,
    BarChartModule,
  ],
})
export class HomeModule {
}
