import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first} from 'rxjs/operators';
import {LocalDataSource} from 'ng2-smart-table';
import {Router} from '@angular/router';
import {HospitalService} from '../../../services/hospital/hospital.service';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'ngx-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss'],
})
export class HospitalListComponent implements OnInit {
  public hospitals: any;
  public error: any;
  public isAdmin = this.auth.currentUserValue.user.role === 'superAdmin';
  public isHospitalAdmin = this.auth.currentUserValue.user.role === 'hospitalAdmin';

  constructor(public http: HttpClient,
              private auth: AuthService,
              public hospitalService: HospitalService,
              public router: Router) {
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: this.isAdmin || this.isHospitalAdmin ? [
        {name: 'viewrecord', title: '<i class="nb-person"></i>'},
        {name: 'editrecord', title: '<i class="nb-edit"></i>'},
      ] : [
        {name: 'viewrecord', title: '<i class="nb-person"></i>'},
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
        this.openHospitalViewPage(event.data);
        break;
      case 'editrecord':
        this.openHospitalEditPage(event.data);
    }
  }

  /**
   * Open hospital view page function
   *
   * @param item
   */
  public openHospitalViewPage(item) {
    this.router.navigate(['/pages/hospitals/' + item._id]);
  }

  /**
   * Open hospital edit page function
   *
   * @param item
   */
  public openHospitalEditPage(item) {
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
