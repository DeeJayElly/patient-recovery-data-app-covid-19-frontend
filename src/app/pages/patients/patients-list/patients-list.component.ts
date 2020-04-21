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
  public isHospitalAdmin = this.auth.currentUserValue.user.role === 'hospitalAdmin';

  constructor(public patientService: PatientService,
              private auth: AuthService,
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
      firstName: {
        title: 'First Name',
        type: 'string',
        editable: false,
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
        editable: false,
      },
      dateOfBirth: {
        title: 'Date of birth',
        valuePrepareFunction: (dateOfBirth: any) => {
          return new DatePipe('en-US').transform(dateOfBirth, 'M/d/yyyy');
        },
        editable: false,
      },
      sex: {
        title: 'Gender',
        type: 'string',
        editable: false,
      },
      contact: {
        title: 'Contact',
        type: 'string',
        editable: false,
      },
    },
    rowClassFunction: (item: any) => {
      let rowClass = '';
      const warningScores = item.data.warningScores;
      if (warningScores && warningScores.length) {
        const currentScore = warningScores[warningScores.length - 1].score;
        if (currentScore <= 3) {
          rowClass = 'row-class-yellow';
        } else if (currentScore > 3 && currentScore <= 5) {
          rowClass = 'row-class-orange';
        } else if (currentScore >= 6) {
          rowClass = 'row-class-red';
        }
      }
      return rowClass;
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
