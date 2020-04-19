import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NbDialogService} from '@nebular/theme';
import {first} from 'rxjs/operators';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {PatientService} from '../../../services/patient/patient.service';
import {Patient} from '../../../models/patient.model';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'ngx-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.scss'],
})
export class PatientCreateComponent implements OnInit {
  public patientCreateForm: FormGroup;
  public submitted = false;
  public error: any;
  public doctors: User[];

  get f() {
    return this.patientCreateForm.controls;
  }

  constructor(public formBuilder: FormBuilder,
              public patientService: PatientService,
              public dialogService: NbDialogService,
              public doctorService: DoctorService) {
    this.patientCreateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      sex: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', Validators.required],
      assignedDoctor: ['', Validators.required],
      drugAllergy: [''],
      smoking: [''],
      coronaryHeartDisease: [''],
      heartArrhythmia: [''],
      heartFailure: [''],
      lungDisease: [''],
      asthma: [''],
      chronicKidneyDisease: [''],
      diabetes: [''],
      heartStroke: [''],
      malignantDisease: [''],
      chronicLiverDisease: [''],
      inflamatoryBowelDisease: [''],
      reuma: [''],
      hiv: [''],
      medications: [''],
      operations: [''],
    });
  }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  private getAllDoctors() {
    this.doctorService.getAllDoctors()
      .pipe(first())
      .subscribe(
        (data: User[]) => {
          this.doctors = data;
          this.doctors = this.doctors.filter(doctor => doctor.role === 'doctor');
          this.patientCreateForm.patchValue({
            assignedDoctor: this.doctors[0].firstName + ' ' + this.doctors[0].lastName,
          });
        },
        error => {
          this.error = error;
        });
  }

  private openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'New patient has been successfully added',
      },
    });
  }

  /**
   * On submit function
   */
  public onSubmit() {
    this.patientService.setPatient(this.patientCreateForm.value)
      .pipe(first())
      .subscribe(
        (data: Patient) => {
          if (data) {
            this.openDialog();
          }
        },
        error => {
          this.error = error;
        });
  }
}
