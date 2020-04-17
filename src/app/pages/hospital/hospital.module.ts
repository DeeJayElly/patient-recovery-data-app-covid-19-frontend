import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HospitalRoutingModule} from './hospital-routing.module';
import { HospitalEditComponent } from './hospital-edit/hospital-edit.component';
import { HospitalViewComponent } from './hospital-view/hospital-view.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';


@NgModule({
  declarations: [HospitalEditComponent, HospitalViewComponent, HospitalListComponent],
  imports: [
    CommonModule,
    HospitalRoutingModule,
  ],
})
export class HospitalModule {
}
