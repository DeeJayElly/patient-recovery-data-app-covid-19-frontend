import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {Patient} from '../../../models/patient.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientService} from '../../../services/patient/patient.service';
import {WarningScore} from '../../../models/warning-score.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss'],
})
export class PatientEditComponent implements OnInit {
  public patient: Patient | undefined;
  public error: any;
  public warningScores: WarningScore[];
  public submitted = false;

  public patientEditForm: FormGroup;
  public radioGroupValue: any;

  get f() {
    return this.patientEditForm.controls;
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private patientService: PatientService) {
  }

  ngOnInit(): void {
    const patientId = this.route.snapshot.params['id'];
    if (patientId) {
      this.getPatientDetails(patientId);
    } else {
      this.error = 'No details for this patient';
    }
  }

  public getPatientDetails(patientId) {
    this.patientService.getPatient(patientId)
      .pipe(first())
      .subscribe(
        (data: Patient) => {
          this.patient = data;
          if (this.patient.warningScores.length) {
            this.warningScores = this.patient.warningScores;
          }
        },
        error => {
          this.error = error;
        });
  }

  public onSubmit() {

  }
}
