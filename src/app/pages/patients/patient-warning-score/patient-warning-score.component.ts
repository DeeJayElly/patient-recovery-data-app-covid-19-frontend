import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient/patient.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-patient-warning-score',
  templateUrl: './patient-warning-score.component.html',
  styleUrls: ['./patient-warning-score.component.scss'],
})
export class PatientWarningScoreComponent implements OnInit {
  public scoreForm: FormGroup;
  public submitted = false;

  get f() {
    return this.scoreForm.controls;
  }

  constructor(public patientService: PatientService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
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
      score: ['', Validators.required],
    });
  }

  public onSubmit() {
   // this.patientService.createNewPatient();
  }
}
