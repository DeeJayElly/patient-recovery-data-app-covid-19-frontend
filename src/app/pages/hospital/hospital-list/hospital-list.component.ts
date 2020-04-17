import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first} from 'rxjs/operators';
import {LocalDataSource} from 'ng2-smart-table';
import {Router} from '@angular/router';
import {HospitalService} from '../../../services/hospital/hospital.service';

@Component({
  selector: 'ngx-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss'],
})
export class HospitalListComponent implements OnInit {
  public hospitals: any;
  public error: any;

  constructor(public http: HttpClient,
              public hospitalService: HospitalService,
              public router: Router) {
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {name: 'viewrecord', title: '<i class="nb-person"></i>'},
        {name: 'editrecord', title: '<i class="nb-edit"></i>'},
      ],
    },
    columns: {
      /* _id: {
        title: 'ID',
        type: 'number',
      }, */
      name: {
        title: 'Hospital Name',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      numberOfBeds: {
        title: 'Number of beds',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  ngOnInit(): void {
    this.hospitalService.getAllHospitals()
      .pipe(first())
      .subscribe(
        data => {
          this.hospitals = data;
          this.source.load(this.hospitals);
        },
        error => {
          this.error = error;
        });
  }

  /**
   * On custom action click function
   *
   * @param event
   */
  public onCustomAction(event) {
    switch (event.action) {
      case 'viewrecord':
        this.openDoctorViewPage(event.data);
        break;
      case 'editrecord':
        this.openDoctorEditPage(event.data);
    }
  }

  /**
   * Open doctor view page function
   *
   * @param item
   */
  public openDoctorViewPage(item) {
    this.router.navigate(['/pages/hospitals/' + item._id]);
  }

  /**
   * Open doctor edit page function
   *
   * @param item
   */
  public openDoctorEditPage(item) {
    this.router.navigate(['/pages/hospitals/' + item._id + '/edit']);
  }

  /**
   * On delete confirm function
   *
   * @param event
   */
  public onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
