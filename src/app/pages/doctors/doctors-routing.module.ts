import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DoctorsListComponent} from './doctors-list/doctors-list.component';
import {DoctorEditComponent} from './doctor-edit/doctor-edit.component';
import {DoctorViewComponent} from './doctor-view/doctor-view.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsListComponent,
  },
  {
    path: ':id',
    children: [
      {
        path: 'edit',
        component: DoctorEditComponent,
        // canDeactivate: [DoctorEditDiscardChangesGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        component: DoctorViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {
}
