import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PatientsListComponent} from './patients-list/patients-list.component';
import {PatientEditComponent} from './patient-edit/patient-edit.component';
import {PatientViewComponent} from './patient-view/patient-view.component';
import {PatientWarningScoreComponent} from './patient-warning-score/patient-warning-score.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsListComponent,
  },
  {
    path: ':id',
    children: [
      {
        path: 'edit',
        component: PatientEditComponent,
        // canDeactivate: [DoctorEditDiscardChangesGuard]
      },
      {
        path: 'warning-score',
        component: PatientWarningScoreComponent,
        // canDeactivate: [DoctorEditDiscardChangesGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        component: PatientViewComponent,
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