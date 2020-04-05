import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient/patient.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {Patient} from '../../../models/patient.model';
import {WarningScore} from '../../../models/warning-score.model';

@Component({
  selector: 'ngx-patient-warning-score',
  templateUrl: './patient-warning-score.component.html',
  styleUrls: ['./patient-warning-score.component.scss'],
})
export class PatientWarningScoreComponent implements OnInit {
  public scoreForm: FormGroup;
  public submitted = false;
  public patientId: any;
  public radioGroupValue: string = 'Value 2';
  public patient: any;

  get f() {
    return this.scoreForm.controls;
  }

  constructor(public patientService: PatientService,
              private formBuilder: FormBuilder,
              public route: ActivatedRoute) {
    this.scoreForm = this.formBuilder.group({
      years: ['', Validators.required],
      numberOfRespirations: ['', Validators.required],
      oxygenSaturation: ['', Validators.required],
      anyAdditionalO2: ['', Validators.required],
      systolicPressure: ['', Validators.required],
      heartRate: ['', Validators.required],
      stateOfConsciousness: ['', Validators.required],
      bodyTemperature: ['', Validators.required],
      coughDegree: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.params['id'];
    this.getPatientDetails(this.patientId);
  }

  public getPatientDetails(patientId) {
    this.patientService.getPatient(patientId)
      .pipe(first())
      .subscribe(
        (data: Patient) => {
          this.patient = data;
          this.createScoreForm();
        },
        error => {
          // this.error = error;
        });
  }

  public createScoreForm() {
    this.scoreForm.patchValue({years: this.patient.warningScores[0].years});
  }

  public onSubmit() {
    this.patientService.createNewScoreForPatient(this.scoreForm.value, this.patientId)
      .pipe(first())
      .subscribe(
        (data: WarningScore) => {
          // TODO dialog with success message
        },
        error => {
          // this.error = error;
        });
  }
}
