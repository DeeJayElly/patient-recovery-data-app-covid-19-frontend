import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {Doctor} from '../../../models/doctor.model';
import {ActivatedRoute} from '@angular/router';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'ngx-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.scss'],
})
export class DoctorEditComponent implements OnInit {
  public doctorEditForm: FormGroup;
  public submitted = false;
  public doctorId: any;
  public doctor: any;

  get f() {
    return this.doctorEditForm.controls;
  }

  constructor(private formBuilder: FormBuilder,
              public doctorService: DoctorService,
              public route: ActivatedRoute,
              public dialogService: NbDialogService) {
    this.doctorEditForm = this.formBuilder.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cityOrRegion: ['', Validators.required],
      hospitalName: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['id'];
    this.getDoctorDetails(this.doctorId);
  }

  public getDoctorDetails(doctorId) {
    this.doctorService.getDoctor(doctorId)
      .pipe(first())
      .subscribe(
        (data: Doctor) => {
          this.doctor = data;
          this.editDoctorForm();
        },
        error => {
          // this.error = error;
        });
  }

  public editDoctorForm() {
    this.doctorEditForm.patchValue({
      email: this.doctor.email,
      firstName: this.doctor.firstName,
      lastName: this.doctor.lastName,
      cityOrRegion: this.doctor.cityOrRegion,
      hospitalName: this.doctor.hospitalName,
      country: this.doctor.country,
    });
  }

  public openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'Doctor data has been successfully updated',
      },
    });
  }

  public onSubmit() {
    this.doctorService.updateDoctor(this.doctorEditForm.value, this.doctorId)
      .pipe(first())
      .subscribe(
        (data: Doctor) => {
          if (data) {
            this.openDialog();
          }
        },
        error => {
          // this.error = error;
        });
  }

}
