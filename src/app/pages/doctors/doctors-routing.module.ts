import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DoctorsListComponent} from './doctors-list/doctors-list.component';
import {DoctorEditComponent} from './doctor-edit/doctor-edit.component';
import {DoctorViewComponent} from './doctor-view/doctor-view.component';
import {DoctorCreateComponent} from './doctor-create/doctor-create.component';
import {AuthGuard} from '../../guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DoctorsListComponent,
  },
  {
    path: 'add',
    canActivate: [AuthGuard],
    component: DoctorCreateComponent,
  },
  {
    path: ':id',
    children: [
      {
        path: 'edit',
        canActivate: [AuthGuard],
        component: DoctorEditComponent,
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
