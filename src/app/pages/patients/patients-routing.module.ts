import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PatientsListComponent} from './patients-list/patients-list.component';
import {PatientEditComponent} from './patient-edit/patient-edit.component';
import {PatientViewComponent} from './patient-view/patient-view.component';
import {PatientWarningScoreCreateComponent} from './patient-warning-score-create/patient-warning-score-create.component';
import {PatientCreateComponent} from './patient-create/patient-create.component';
import {PatientWarningScoreEditComponent} from './patient-warning-score-edit/patient-warning-score-edit.component';
import {PatientWarningScoreViewComponent} from './patient-warning-score-view/patient-warning-score-view.component';
import {AuthGuard} from '../../guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PatientsListComponent,
  },
  {
    path: 'add',
    canActivate: [AuthGuard],
    component: PatientCreateComponent,
  },
  {
    path: ':id',
    children: [
      {
        path: 'edit',
        canActivate: [AuthGuard],
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
        canActivate: [AuthGuard],
        component: PatientWarningScoreCreateComponent,
      },
      {
        path: 'edit',
        canActivate: [AuthGuard],
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
