import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {User} from '../../../models/user.model';
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
  public error: any;

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
      hospital: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['id'];
    this.getDoctorDetails(this.doctorId);
  }

  /**
   * Get doctor details function
   *
   * @param doctorId
   */
  public getDoctorDetails(doctorId) {
    this.doctorService.getDoctor(doctorId)
      .pipe(first())
      .subscribe(
        (data: User) => {
          this.doctor = data;
          this.editDoctorForm();
        },
        error => {
          this.error = error;
        });
  }

  /**
   * Edit doctor form function
   */
  public editDoctorForm() {
    this.doctorEditForm.patchValue({
      email: this.doctor.email,
      firstName: this.doctor.firstName,
      lastName: this.doctor.lastName,
      cityOrRegion: this.doctor.cityOrRegion,
      hospital: this.doctor.hospital,
      country: this.doctor.country,
    });
  }

  /**
   * Open dialog function
   */
  public openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'Doctor data has been successfully updated',
      },
    });
  }

  /**
   * On submit function
   */
  public onSubmit() {
    this.doctorService.updateDoctor(this.doctorEditForm.value, this.doctorId)
      .pipe(first())
      .subscribe(
        (data: User) => {
          if (data) {
            this.openDialog();
          }
        },
        error => {
          this.error = error;
        });
  }
}
