import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientsRoutingModule} from './patients-routing.module';
import {PatientsListComponent} from './patients-list/patients-list.component';
import {PatientViewComponent} from './patient-view/patient-view.component';
import {PatientEditComponent} from './patient-edit/patient-edit.component';

@NgModule({
  declarations: [PatientsListComponent, PatientViewComponent, PatientEditComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
  ],
})
export class PatientsModule {
}
