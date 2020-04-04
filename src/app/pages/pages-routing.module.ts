import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      loadChildren: () => import('./home/home.module')
        .then(m => m.HomeModule),
    },
    {
      path: 'patients',
      loadChildren: () => import('./patients/patients.module')
        .then(m => m.PatientsModule),
    },
    {
      path: 'doctors',
      loadChildren: () => import('./doctors/doctors.module')
        .then(m => m.DoctorsModule),
    },
    {
      path: 'reports',
      loadChildren: () => import('./reports/reports.module')
        .then(m => m.ReportsModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
