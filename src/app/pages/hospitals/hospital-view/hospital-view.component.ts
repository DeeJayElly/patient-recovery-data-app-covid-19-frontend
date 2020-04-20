import {Component, OnInit} from '@angular/core';
import {Hospital} from '../../../models/hospital.model';
import {ActivatedRoute} from '@angular/router';
import {HospitalService} from '../../../services/hospital/hospital.service';
import {first} from 'rxjs/operators';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'ngx-hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.scss'],
})
export class HospitalViewComponent implements OnInit {
  public hospital: Hospital | undefined;
  public error: any;

  constructor(private route: ActivatedRoute,
              private hospitalService: HospitalService,
              public dialogService: NbDialogService) {
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

  /**
   * Delete hospital function
   */
  public deleteHospital() {
    this.hospitalService.deleteHospital(this.hospital._id)
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
        title: 'Hospital data has been successfully deleted',
      },
    });
  }
}
