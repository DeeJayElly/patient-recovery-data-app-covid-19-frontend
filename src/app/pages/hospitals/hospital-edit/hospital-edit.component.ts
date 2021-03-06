import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {Hospital} from '../../../models/hospital.model';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {NbDialogService} from '@nebular/theme';
import {HospitalService} from '../../../services/hospital/hospital.service';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'ngx-hospital-edit',
  templateUrl: './hospital-edit.component.html',
  styleUrls: ['./hospital-edit.component.scss'],
})
export class HospitalEditComponent implements OnInit {
  public hospitalEditForm: FormGroup;
  public submitted = false;
  public hospitalId: any;
  public hospital: any;
  public error: any;
  public canEditHospital: boolean;

  get f() {
    return this.hospitalEditForm.controls;
  }

  constructor(private formBuilder: FormBuilder,
              public hospitalService: HospitalService,
              public route: ActivatedRoute,
              public dialogService: NbDialogService,
              private auth: AuthService) {
    this.hospitalEditForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      numberOfBeds: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.hospitalId = this.route.snapshot.params['id'];
    this.getHospitalDetails(this.hospitalId);
  }


  /**
   * Get hospital details function
   *
   * @param hospitalId
   */
  public getHospitalDetails(hospitalId) {
    this.hospitalService.getHospital(hospitalId)
      .pipe(first())
      .subscribe(
        (data: Hospital) => {
          this.hospital = data;
          this.canEditHospital = this.checkHospitalAdminToHospitalRelation();
          if (this.canEditHospital) {
            this.editHospitalForm();
          }
        },
        error => {
          this.error = error;
        });
  }

  private checkHospitalAdminToHospitalRelation() {
    const user = this.auth.currentUserValue;
    return (this.hospital.name === user.user.hospital && user.user.role === 'hospitalAdmin') || user.user.role === 'superAdmin';
  }

  /**
   * Edit hospital form function
   */
  public editHospitalForm() {
    this.hospitalEditForm.patchValue({
      name: this.hospital.name,
      address: this.hospital.address,
      numberOfBeds: this.hospital.numberOfBeds,
    });
  }

  private openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'Hospital data has been successfully updated',
      },
    });
  }

  /**
   * On submit function
   */
  public onSubmit() {
    this.hospitalService.updateHospital(this.hospitalEditForm.value, this.hospitalId)
      .pipe(first())
      .subscribe(
        (data: Hospital) => {
          if (data) {
            this.openDialog();
          }
        },
        error => {
          this.error = error;
        });
  }
}
