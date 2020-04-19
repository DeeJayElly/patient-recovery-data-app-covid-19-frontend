import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient/patient.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {Patient} from '../../../models/patient.model';
import {WarningScore} from '../../../models/warning-score.model';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'ngx-patient-warning-score-create',
  templateUrl: './patient-warning-score-create.component.html',
  styleUrls: ['./patient-warning-score-create.component.scss'],
})
export class PatientWarningScoreCreateComponent implements OnInit {
  public scoreForm: FormGroup;
  public submitted = false;
  public patientId: any;
  public radioGroupValue: string = 'Value 2';
  public patient: any;
  public error: any;

  get f() {
    return this.scoreForm.controls;
  }

  constructor(public patientService: PatientService,
              private formBuilder: FormBuilder,
              public route: ActivatedRoute,
              public dialogService: NbDialogService) {
    this.scoreForm = this.formBuilder.group({
      years: ['', Validators.required],
      numberOfRespirations: ['', Validators.required],
      oxygenSaturation: ['', Validators.required],
      anyAdditionalO2: ['', Validators.required],
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
          this.createScoreForm();
        },
        error => {
          this.error = error;
        });
  }

  /**
   * Create score form function
   */
  public createScoreForm() {
    this.scoreForm.patchValue({years: this.patient.warningScores[0].years});
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
    this.patientService.createNewScoreForPatient(this.scoreForm.value, this.patientId)
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
