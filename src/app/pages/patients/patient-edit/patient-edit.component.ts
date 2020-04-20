import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/user.model';
import {PatientService} from '../../../services/patient/patient.service';
import {NbDialogService} from '@nebular/theme';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {first} from 'rxjs/operators';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {Patient} from '../../../models/patient.model';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'ngx-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss'],
})

export class PatientEditComponent implements OnInit {
  public patientEditForm: FormGroup;
  public submitted = false;
  public error: any;
  public doctors: User[];
  public patient: Patient;
  public patientId: string;
  public canEditPatient: boolean;

  get f() {
    return this.patientEditForm.controls;
  }

  constructor(public formBuilder: FormBuilder,
              public route: ActivatedRoute,
              public patientService: PatientService,
              public dialogService: NbDialogService,
              public doctorService: DoctorService,
              private auth: AuthService) {
    this.patientEditForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      sex: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', Validators.required],
      assignedDoctor: ['', Validators.required],
      drugAllergy: [false],
      smoking: [false],
      coronaryHeartDisease: [false],
      heartArrhythmia: [false],
      heartFailure: [false],
      lungDisease: [false],
      asthma: [false],
      chronicKidneyDisease: [false],
      diabetes: [false],
      heartStroke: [false],
      malignantDisease: [false],
      chronicLiverDisease: [false],
      inflamatoryBowelDisease: [false],
      reuma: [false],
      hiv: [false],
      medications: [''],
      operations: [''],
    });
  }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.params['id'];
    this.getPatientDetails(this.patientId);
  }

  private getPatientDetails(patientId) {
    this.patientService.getPatient(patientId)
      .pipe(first())
      .subscribe(
        (data: Patient) => {
          this.patient = data;
          this.getAllDoctors();
        },
        error => {
          this.error = error;
        });
  }

  private checkDoctorToPatientRelation() {
    const user = this.auth.currentUserValue;
    const filteredDoctor = this.doctors.filter(doctor => this.patient.assignedDoctor === doctor._id);
    return (this.patient.assignedDoctor === user.user._id && user.user.role === 'doctor')
      || (filteredDoctor.length && user.user.role === 'hospitalAdmin' ?
        filteredDoctor[0].hospital === user.user.hospital && user.user.role === 'hospitalAdmin' : false)
      || user.user.role === 'superAdmin';
  }

  private getAllDoctors() {
    this.doctorService.getAllDoctors()
      .pipe(first())
      .subscribe(
        (data: User[]) => {
          this.doctors = data;
          this.doctors = this.doctors.filter(doctor => doctor.role === 'doctor');
          this.canEditPatient = this.checkDoctorToPatientRelation();
          if (this.canEditPatient) {
            this.editPatientForm();
          }
        },
        error => {
          this.error = error;
        });
  }

  /**
   * Edit patient form function
   */
  public editPatientForm() {
    this.patientEditForm.patchValue({
      firstName: this.patient.firstName,
      lastName: this.patient.lastName,
      dateOfBirth: this.patient.dateOfBirth,
      sex: this.patient.sex,
      address: this.patient.address,
      contact: this.patient.contact,
      assignedDoctor: this.patient.assignedDoctor,
      drugAllergy: this.patient.drugAllergy,
      smoking: this.patient.smoking,
      coronaryHeartDisease: this.patient.coronaryHeartDisease,
      heartArrhythmia: this.patient.heartArrhythmia,
      heartFailure: this.patient.heartFailure,
      lungDisease: this.patient.lungDisease,
      asthma: this.patient.asthma,
      chronicKidneyDisease: this.patient.chronicKidneyDisease,
      diabetes: this.patient.diabetes,
      heartStroke: this.patient.heartStroke,
      malignantDisease: this.patient.malignantDisease,
      chronicLiverDisease: this.patient.chronicLiverDisease,
      inflamatoryBowelDisease: this.patient.inflamatoryBowelDisease,
      reuma: this.patient.reuma,
      hiv: this.patient.hiv,
      medications: this.patient.medications,
      operations: this.patient.operations,
    });
  }

  private openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'Patient data has been successfully edited',
      },
    });
  }

  /**
   * On submit function
   */
  public onSubmit() {
    this.patientService.updatePatient(this.patientEditForm.value, this.patientId)
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
