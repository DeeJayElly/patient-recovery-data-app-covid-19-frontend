import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReportsListComponent} from './reports-list/reports-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {
}
