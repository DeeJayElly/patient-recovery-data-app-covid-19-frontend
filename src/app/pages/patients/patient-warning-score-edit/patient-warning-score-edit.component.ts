import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../../../services/patient/patient.service';
import {ActivatedRoute} from '@angular/router';
import {NbDialogService} from '@nebular/theme';
import {first} from 'rxjs/operators';
import {Patient} from '../../../models/patient.model';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {WarningScore} from '../../../models/warning-score.model';
import {User} from '../../../models/user.model';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'ngx-patient-warning-score-edit',
  templateUrl: './patient-warning-score-edit.component.html',
  styleUrls: ['./patient-warning-score-edit.component.scss'],
})
export class PatientWarningScoreEditComponent implements OnInit {
  public editScoreForm: FormGroup;
  public submitted = false;
  public patientId: any;
  public patient: any;
  public error: any;
  public doctors: User[];
  public canEditPatient: boolean;
  public warningScores: WarningScore;

  get f() {
    return this.editScoreForm.controls;
  }

  constructor(public patientService: PatientService,
              private formBuilder: FormBuilder,
              public route: ActivatedRoute,
              public dialogService: NbDialogService,
              private doctorService: DoctorService,
              private auth: AuthService) {
    this.editScoreForm = this.formBuilder.group({
      years: ['', Validators.required],
      numberOfRespirations: ['', Validators.required],
      oxygenSaturation: ['', Validators.required],
      anyAdditionalO2: [false, Validators.required],
      systolicPressure: ['', Validators.required],
      heartRate: ['', Validators.required],
      stateOfConsciousness: ['', Validators.required],
      bodyTemperature: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.params['id'];
    this.getPatientDetails(this.patientId);
  }

  /**
   * Get patient details function
   *
   * @param patientId
   */
  public getPatientDetails(patientId) {
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

  private getAllDoctors() {
    this.doctorService.getAllDoctors()
      .pipe(first())
      .subscribe(
        (data: User[]) => {
          this.doctors = data;
          this.doctors = this.doctors.filter(doctor => doctor.role === 'doctor');
          this.canEditPatient = this.checkDoctorToPatientRelation();
          if (this.canEditPatient) {
            this.getPatientWarningScores();
          }
        },
        error => {
          this.error = error;
        });
  }

  private getPatientWarningScores() {
    this.patientService.getAllPatientsWarningScores(this.patientId)
      .pipe(first())
      .subscribe(
        (data: WarningScore) => {
          this.warningScores = data;
          this.editPatientForm();
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

  /**
   * Edit warning score form function
   */
  public editPatientForm() {
    this.editScoreForm.patchValue({
      years: this.warningScores ? this.warningScores.years : this.patient.warningScores[this.patient.warningScores.length - 1].years,
      numberOfRespirations: this.warningScores ? this.warningScores.numberOfRespirations : this.patient.warningScores[this.patient.warningScores.length - 1].numberOfRespirations,
      oxygenSaturation: this.warningScores ? this.warningScores.oxygenSaturation : this.patient.warningScores[this.patient.warningScores.length - 1].oxygenSaturation,
      anyAdditionalO2: this.warningScores ? this.warningScores.anyAdditionalO2 : this.patient.warningScores[this.patient.warningScores.length - 1].anyAdditionalO2,
      systolicPressure: this.warningScores ? this.warningScores.systolicPressure : this.patient.warningScores[this.patient.warningScores.length - 1].systolicPressure,
      heartRate: this.warningScores ? this.warningScores.heartRate : this.patient.warningScores[this.patient.warningScores.length - 1].heartRate,
      stateOfConsciousness: this.warningScores ? this.warningScores.stateOfConsciousness : this.patient.warningScores[this.patient.warningScores.length - 1].stateOfConsciousness,
      bodyTemperature: this.warningScores ? this.warningScores.bodyTemperature : this.patient.warningScores[this.patient.warningScores.length - 1].bodyTemperature,
    });
  }

  private openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'Patient daily risk score successfully updated',
      },
    });
  }

  /**
   * On submit function
   */
  public onSubmit() {
    this.patientService.updateSinglePatientWarningScores(this.editScoreForm.value, this.patientId)
      .pipe(first())
      .subscribe(
        (data: WarningScore) => {
          if (data) {
            this.openDialog();
          }
        },
        error => {
          this.error = error;
        });
  }
}
