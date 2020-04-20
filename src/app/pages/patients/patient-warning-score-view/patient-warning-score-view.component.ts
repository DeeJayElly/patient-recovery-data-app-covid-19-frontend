import {Component, OnInit} from '@angular/core';
import {Patient} from '../../../models/patient.model';
import {User} from '../../../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../../services/patient/patient.service';
import {NbDialogService} from '@nebular/theme';
import {first} from 'rxjs/operators';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';

@Component({
  selector: 'ngx-patient-warning-score-view',
  templateUrl: './patient-warning-score-view.component.html',
  styleUrls: ['./patient-warning-score-view.component.scss'],
})
export class PatientWarningScoreViewComponent implements OnInit {
  public patient: Patient | undefined;
  public error: any;
  public doctor: User;

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
   * Delete patient warning score function
   */
  public deletePatientWarningScore() {
    this.patientService.deleteSinglePatientWarningScores(this.patient.warningScores[this.patient.warningScores.length - 1]._id)
      .pipe(first())
      .subscribe(
        (data: any) => {
          this.openDialog();
        },
        error => {
          this.error = error;
        });
  }

  private openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'Patient warning score data has been successfully deleted',
      },
    });
  }
}
