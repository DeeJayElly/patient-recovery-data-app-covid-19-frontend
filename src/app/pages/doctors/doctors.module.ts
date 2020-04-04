import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoctorsRoutingModule} from './doctors-routing.module';
import {DoctorsListComponent} from './doctors-list/doctors-list.component';
import {DoctorViewComponent} from './doctor-view/doctor-view.component';
import {DoctorEditComponent} from './doctor-edit/doctor-edit.component';

@NgModule({
  declarations: [DoctorsListComponent, DoctorViewComponent, DoctorEditComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
  ],
})
export class DoctorsModule {
}
