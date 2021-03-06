import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientsRoutingModule} from './patients-routing.module';
import {PatientsListComponent} from './patients-list/patients-list.component';
import {PatientViewComponent} from './patient-view/patient-view.component';
import {PatientEditComponent} from './patient-edit/patient-edit.component';
import {PatientWarningScoreCreateComponent} from './patient-warning-score-create/patient-warning-score-create.component';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbRadioModule,
  NbSelectModule,
  NbStepperModule,
  NbTreeGridModule,
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {TablesRoutingModule} from '../tables/tables-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PatientCreateComponent} from './patient-create/patient-create.component';
import {PatientWarningScoreEditComponent} from './patient-warning-score-edit/patient-warning-score-edit.component';
import {PatientWarningScoreViewComponent} from './patient-warning-score-view/patient-warning-score-view.component';
import {PatientRelevantDataCreateComponent} from './patient-relevant-data-create/patient-relevant-data-create.component';
import {PatientRelevantDataViewComponent} from './patient-relevant-data-view/patient-relevant-data-view.component';
import {PatientRelevantDataEditComponent} from './patient-relevant-data-edit/patient-relevant-data-edit.component';

@NgModule({
  declarations: [
    PatientsListComponent,
    PatientViewComponent,
    PatientEditComponent,
    PatientWarningScoreCreateComponent,
    PatientCreateComponent,
    PatientWarningScoreEditComponent,
    PatientWarningScoreViewComponent,
    PatientRelevantDataCreateComponent,
    PatientRelevantDataViewComponent,
    PatientRelevantDataEditComponent,
  ],
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
    ReactiveFormsModule,
    FormsModule,
    NbButtonModule,
    NbListModule,
    NbRadioModule,
    NbStepperModule,
    NbSelectModule,
  ],
})
export class PatientsModule {
}
