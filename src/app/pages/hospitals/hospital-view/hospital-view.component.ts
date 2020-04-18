import {Component, OnInit} from '@angular/core';
import {Hospital} from '../../../models/hospital.model';
import {ActivatedRoute} from '@angular/router';
import {HospitalService} from '../../../services/hospital/hospital.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'ngx-hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.scss'],
})
export class HospitalViewComponent implements OnInit {
  public hospital: Hospital | undefined;
  public error: any;

  constructor(private route: ActivatedRoute,
              private hospitalService: HospitalService) {
  }

  ngOnInit(): void {
    const hospitalId = this.route.snapshot.params['id'];
    if (hospitalId) {
      this.getHospitalDetails(hospitalId);
    } else {
      this.error = 'No details for this hospital';
    }
  }

  /**
   * Get hospital details function
   *
   * @param hospitalId
   */
  public getHospitalDetails(hospitalId) {
    this.hospitalService.getHospital(hospitalId)
      .pipe(first())
      .subscribe(
        (data: Hospital) => {
          this.hospital = data;
        },
        error => {
          this.error = error;
        });
  }

}
