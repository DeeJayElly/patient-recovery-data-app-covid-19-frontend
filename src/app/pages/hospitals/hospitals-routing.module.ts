import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HospitalListComponent} from './hospital-list/hospital-list.component';
import {HospitalEditComponent} from './hospital-edit/hospital-edit.component';
import {HospitalViewComponent} from './hospital-view/hospital-view.component';
import {HospitalCreateComponent} from './hospital-create/hospital-create.component';
import {AuthGuard} from '../../guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HospitalListComponent,
  },
  {
    path: 'add',
    canActivate: [AuthGuard],
    component: HospitalCreateComponent,
  },
  {
    path: ':id',
    children: [
      {
        path: 'edit',
        canActivate: [AuthGuard],
        component: HospitalEditComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: HospitalViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalsRoutingModule {
}
