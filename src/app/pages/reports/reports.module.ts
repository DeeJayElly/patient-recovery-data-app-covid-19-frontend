import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsRoutingModule} from './reports-routing.module';
import {ReportsListComponent} from './reports-list/reports-list.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [ReportsListComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    TranslateModule,
  ],
})
export class ReportsModule {
}
