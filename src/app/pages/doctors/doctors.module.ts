import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoctorsRoutingModule} from './doctors-routing.module';
import {DoctorsListComponent} from './doctors-list/doctors-list.component';
import {DoctorViewComponent} from './doctor-view/doctor-view.component';
import {DoctorEditComponent} from './doctor-edit/doctor-edit.component';
import {NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {TablesRoutingModule} from '../tables/tables-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [DoctorsListComponent, DoctorViewComponent, DoctorEditComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    TranslateModule,
  ],
})
export class DoctorsModule {
}
