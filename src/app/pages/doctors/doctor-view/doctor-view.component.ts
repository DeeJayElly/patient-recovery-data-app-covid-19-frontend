import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {first} from 'rxjs/operators';
import {User} from '../../../models/user.model';

@Component({
  selector: 'ngx-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss'],
})
export class DoctorViewComponent implements OnInit {
  public doctor: User | undefined;
  public error: any;

  constructor(private route: ActivatedRoute,
              private doctorService: DoctorService) {
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
}
