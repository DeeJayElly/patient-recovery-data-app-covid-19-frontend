import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientsRoutingModule} from './patients-routing.module';
import {PatientsListComponent} from './patients-list/patients-list.component';
import {PatientViewComponent} from './patient-view/patient-view.component';
import {PatientEditComponent} from './patient-edit/patient-edit.component';
import {PatientWarningScoreComponent} from './patient-warning-score/patient-warning-score.component';
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

@NgModule({
  declarations: [PatientsListComponent, PatientViewComponent, PatientEditComponent, PatientWarningScoreComponent],
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
    NbButtonModule,
    NbListModule,
  ],
})
export class PatientsModule {
}
