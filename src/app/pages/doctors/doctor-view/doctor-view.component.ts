import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {first} from 'rxjs/operators';
import {Doctor} from '../../../models/doctor.model';

@Component({
  selector: 'ngx-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss'],
})
export class DoctorViewComponent implements OnInit {
  public doctor: Doctor | undefined;
  public error: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
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
        (data: Doctor) => {
          this.doctor = data;
        },
        error => {
          this.error = error;
        });
  }
}
