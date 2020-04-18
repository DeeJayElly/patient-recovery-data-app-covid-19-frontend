import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {first} from 'rxjs/operators';
import {PatientService} from '../../../services/patient/patient.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'ngx-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
})
export class PatientsListComponent implements OnInit {
  public patients: any;
  public error: any;
  public isAdmin = this.auth.currentUserValue.user.role === 'superAdmin';

  constructor(public patientService: PatientService,
              private auth: AuthService,
              public router: Router) {
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: this.isAdmin ? [
        {name: 'viewrecord', title: '<i class="nb-person"></i>'},
        {name: 'editrecord', title: '<i class="nb-edit"></i>'},
      ] : [
        {name: 'viewrecord', title: '<i class="nb-person"></i>'},
      ],
    },
    columns: {
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      dateOfBirth: {
        title: 'Date of birth',
        valuePrepareFunction: (dateOfBirth: any) => {
          return new DatePipe('en-US').transform(dateOfBirth, 'M/d/yyyy');
        },
      },
      sex: {
        title: 'Gender',
        type: 'string',
      },
      contact: {
        title: 'Contact',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  ngOnInit(): void {
    this.patientService.getAllPatients()
      .pipe(first())
      .subscribe(
        data => {
          this.patients = data;
          this.source.load(this.patients);
        },
        error => {
          this.error = error;
        });
  }

  /**
   * On custom action function
   *
   * @param event
   */
  public onCustomAction(event) {
    switch (event.action) {
      case 'viewrecord':
        this.openPatientViewPage(event.data);
        break;
      case 'editrecord':
        this.openPatientEditPage(event.data);
    }
  }

  /**
   * Open patient view page function
   *
   * @param item
   */
  public openPatientViewPage(item) {
    this.router.navigate(['/pages/patients/' + item._id]);
  }

  /**
   * Open patient edit page function
   *
   * @param item
   */
  public openPatientEditPage(item) {
    this.router.navigate(['/pages/patients/' + item._id + '/edit']);
  }

  /**
   * On delete confirm click function
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
