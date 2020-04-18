import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HospitalsRoutingModule} from './hospitals-routing.module';
import {HospitalEditComponent} from './hospital-edit/hospital-edit.component';
import {HospitalViewComponent} from './hospital-view/hospital-view.component';
import {HospitalListComponent} from './hospital-list/hospital-list.component';
import {NbButtonModule, NbCardModule, NbInputModule, NbListModule} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { HospitalCreateComponent } from './hospital-create/hospital-create.component';

@NgModule({
  declarations: [HospitalEditComponent, HospitalViewComponent, HospitalListComponent, HospitalCreateComponent],
  imports: [
    CommonModule,
    HospitalsRoutingModule,
    NbCardModule,
    ReactiveFormsModule,
    TranslateModule,
    Ng2SmartTableModule,
    NbInputModule,
    NbButtonModule,
    NbListModule,
  ],
})
export class HospitalsModule {
}
