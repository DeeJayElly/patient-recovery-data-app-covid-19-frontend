import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientsRoutingModule} from './patients-routing.module';
import {PatientsListComponent} from './patients-list/patients-list.component';
import {PatientViewComponent} from './patient-view/patient-view.component';
import {PatientEditComponent} from './patient-edit/patient-edit.component';
import {NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {TablesRoutingModule} from '../tables/tables-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [PatientsListComponent, PatientViewComponent, PatientEditComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
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
export class PatientsModule {
}
