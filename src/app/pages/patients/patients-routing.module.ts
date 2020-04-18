import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PatientsListComponent} from './patients-list/patients-list.component';
import {PatientEditComponent} from './patient-edit/patient-edit.component';
import {PatientViewComponent} from './patient-view/patient-view.component';
import {PatientWarningScoreCreateComponent} from './patient-warning-score-create/patient-warning-score-create.component';
import {PatientCreateComponent} from './patient-create/patient-create.component';
import {PatientWarningScoreEditComponent} from './patient-warning-score-edit/patient-warning-score-edit.component';
import {PatientWarningScoreViewComponent} from './patient-warning-score-view/patient-warning-score-view.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsListComponent,
  },
  {
    path: 'add',
    component: PatientCreateComponent,
  },
  {
    path: ':id',
    children: [
      {
        path: 'edit',
        component: PatientEditComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: PatientViewComponent,
      },
    ],
  },
  {
    path: 'warning-scores',
    children: [
      {
        path: 'add',
        component: PatientWarningScoreCreateComponent,
      },
      {
        path: 'edit',
        component: PatientWarningScoreEditComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: PatientWarningScoreViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {
}
