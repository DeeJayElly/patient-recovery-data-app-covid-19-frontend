import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {NbButtonModule, NbCardModule, NbCheckboxModule} from '@nebular/theme';
import {ChartsModule} from '../charts/charts.module';
import {BarChartModule, NgxChartsModule} from '@swimlane/ngx-charts';
import {ImportDataComponent} from './import-data/import-data.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {TranslateModule} from '@ngx-translate/core';

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
    TranslateModule,
    NbCheckboxModule,
    NbButtonModule,
  ],
})
export class HomeModule {
}
