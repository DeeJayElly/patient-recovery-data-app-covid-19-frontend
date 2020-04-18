import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HospitalRoutingModule} from './hospital-routing.module';
import {HospitalEditComponent} from './hospital-edit/hospital-edit.component';
import {HospitalViewComponent} from './hospital-view/hospital-view.component';
import {HospitalListComponent} from './hospital-list/hospital-list.component';
import {NbButtonModule, NbCardModule, NbInputModule, NbListModule} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  declarations: [HospitalEditComponent, HospitalViewComponent, HospitalListComponent],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    NbCardModule,
    ReactiveFormsModule,
    TranslateModule,
    Ng2SmartTableModule,
    NbInputModule,
    NbButtonModule,
    NbListModule,
  ],
})
export class HospitalModule {
}
