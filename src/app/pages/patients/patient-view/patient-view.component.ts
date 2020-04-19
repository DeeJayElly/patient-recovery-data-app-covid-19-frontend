import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {Patient} from '../../../models/patient.model';
import {PatientService} from '../../../services/patient/patient.service';
import {WarningScore} from '../../../models/warning-score.model';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'ngx-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss'],
})
export class PatientViewComponent implements OnInit {
  public patient: Patient | undefined;
  public error: any;
  public warningScores: WarningScore;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    const patientId = this.route.snapshot.params['id'];
    if (patientId) {
      this.getPatientDetails(patientId);
    } else {
      this.error = 'No details for this patient';
    }
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
        },
        error => {
          this.error = error;
        });
  }

  /**
   * Delete patient function
   */
  public deletePatient() {
    this.patientService.deletePatient(this.patient._id.toString())
      .pipe(first())
      .subscribe(
        (data: any) => {
          this.openDialog();
        },
        error => {
          this.error = error;
        });
  }

  /**
   * Open dialog function
   */
  public openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'Patient data has been successfully deleted',
      },
    });
  }
}
