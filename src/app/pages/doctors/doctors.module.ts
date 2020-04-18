import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoctorsRoutingModule} from './doctors-routing.module';
import {DoctorsListComponent} from './doctors-list/doctors-list.component';
import {DoctorViewComponent} from './doctor-view/doctor-view.component';
import {DoctorEditComponent} from './doctor-edit/doctor-edit.component';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbTreeGridModule,
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {TablesRoutingModule} from '../tables/tables-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';

@NgModule({
  declarations: [DoctorsListComponent, DoctorViewComponent, DoctorEditComponent, DoctorCreateComponent],
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
    NbListModule,
    NbButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DoctorsModule {
}
