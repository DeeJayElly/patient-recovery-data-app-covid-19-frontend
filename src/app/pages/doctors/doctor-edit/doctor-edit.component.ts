import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {User} from '../../../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {NbDialogService} from '@nebular/theme';
import {AuthService} from '../../../services/auth/auth.service';
import {Hospital} from '../../../models/hospital.model';
import {HospitalService} from '../../../services/hospital/hospital.service';

@Component({
  selector: 'ngx-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.scss'],
})
export class DoctorEditComponent implements OnInit {
  public doctorEditForm: FormGroup;
  public submitted = false;
  public doctorId: any;
  public doctor: User;
  public error: any;
  public canEditDoctor: boolean;
  public hospitals: Hospital[];

  get f() {
    return this.doctorEditForm.controls;
  }

  constructor(private formBuilder: FormBuilder,
              public doctorService: DoctorService,
              public route: ActivatedRoute,
              public dialogService: NbDialogService,
              private auth: AuthService,
              private hospitalService: HospitalService) {
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
    this.getAllHospitals();
  }

  private getDoctorDetails(doctorId) {
    this.doctorService.getDoctor(doctorId)
      .pipe(first())
      .subscribe(
        (data: User) => {
          this.doctor = data;
          this.canEditDoctor = this.checkDoctorToHospitalRelation();
          if (this.canEditDoctor) {
            this.editDoctorForm();
          }
        },
        error => {
          this.error = error;
        });
  }

  private getAllHospitals() {
    this.hospitalService.getAllHospitals()
      .pipe(first())
      .subscribe(
        (data: Hospital[]) => {
          this.hospitals = data;
          this.doctorEditForm.patchValue({
            hospital: this.hospitals[0],
          });
        },
        error => {
          this.error = error;
        });
  }

  private checkDoctorToHospitalRelation() {
    const user = this.auth.currentUserValue;
    return (this.doctor.hospital === user.user.hospital && user.user.role === 'hospitalAdmin') || user.user.role === 'superAdmin';
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
      hospital: this.doctor.hospital.name,
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
