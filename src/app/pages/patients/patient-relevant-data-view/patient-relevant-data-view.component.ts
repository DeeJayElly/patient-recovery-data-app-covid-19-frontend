import {Component, OnInit} from '@angular/core';
import {Patient} from '../../../models/patient.model';
import {User} from '../../../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../../services/patient/patient.service';
import {NbDialogService} from '@nebular/theme';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {first} from 'rxjs/operators';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';

@Component({
  selector: 'ngx-patient-relevant-data-view',
  templateUrl: './patient-relevant-data-view.component.html',
  styleUrls: ['./patient-relevant-data-view.component.scss'],
})
export class PatientRelevantDataViewComponent implements OnInit {
  public patient: Patient | undefined;
  public error: any;
  public doctor: User;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private dialogService: NbDialogService,
    private doctorService: DoctorService) {
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
          if (this.patient.assignedDoctor) {
            this.getAssignedDoctor();
          }
        },
        error => {
          this.error = error;
        });
  }

  private getAssignedDoctor() {
    this.doctorService.getDoctor(this.patient.assignedDoctor)
      .pipe(first())
      .subscribe(
        (data: User) => {
          this.doctor = data;
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

  private openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'Patient data has been successfully deleted',
      },
    });
  }
}
