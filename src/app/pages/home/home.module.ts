import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {NbCardModule} from '@nebular/theme';
import {ChartsModule} from '../charts/charts.module';
import {BarChartModule, NgxChartsModule} from '@swimlane/ngx-charts';
import {ImportDataComponent} from './import-data/import-data.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [HomeComponent, ImportDataComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    ChartsModule,
    BarChartModule,
    NgxChartsModule,
    DragDropModule,
  ],
})
export class HomeModule {
}
