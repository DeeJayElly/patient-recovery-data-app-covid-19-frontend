import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HospitalListComponent} from './hospital-list/hospital-list.component';
import {HospitalEditComponent} from './hospital-edit/hospital-edit.component';
import {HospitalViewComponent} from './hospital-view/hospital-view.component';

const routes: Routes = [
  {
    path: '',
    component: HospitalListComponent,
  },
  {
    path: ':id',
    children: [
      {
        path: 'edit',
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
