import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {first} from 'rxjs/operators';
import {User} from '../../../models/user.model';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'ngx-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss'],
})
export class DoctorViewComponent implements OnInit {
  public doctor: User | undefined;
  public error: any;

  constructor(private route: ActivatedRoute,
              private doctorService: DoctorService,
              public dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    const doctorId = this.route.snapshot.params['id'];
    if (doctorId) {
      this.getDoctorDetails(doctorId);
    } else {
      this.error = 'No details for this doctor';
    }
  }

  /**
   * Get doctor details function
   *
   * @param doctorId
   */
  public getDoctorDetails(doctorId) {
    this.doctorService.getDoctor(doctorId)
      .pipe(first())
      .subscribe(
        (data: User) => {
          this.doctor = data;
        },
        error => {
          this.error = error;
        });
  }

  public deleteDoctor() {
    this.doctorService.deleteDoctor(this.doctor._id)
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
        title: 'Doctor data has been successfully deleted',
      },
    });
  }
}
