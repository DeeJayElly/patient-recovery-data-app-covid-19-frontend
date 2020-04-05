import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {first} from 'rxjs/operators';
import {PatientService} from '../../../services/patient/patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
})
export class PatientsListComponent implements OnInit {
  public patients: any;
  public error: any;

  constructor(public patientService: PatientService,
              public router: Router) {
  }

  settings = {
    hideSubHeader: true,
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
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      dateOfBirth: {
        title: 'Date of birth',
        type: 'date',
      },
      sex: {
        title: 'Gender',
        type: 'string',
      },
      contact: {
        title: 'Contact',
        type: 'string',
      },
      problemsDuration: {
        title: 'Symptoms duration',
        type: 'number',
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

  public onCustomAction(event) {
    switch (event.action) {
      case 'viewrecord':
        this.openPatientViewPage(event.data);
        break;
      case 'editrecord':
        this.openPatientEditPage(event.data);
    }
  }

  public openPatientViewPage(item) {
    this.router.navigate(['/pages/patients/' + item._id]);
  }

  public openPatientEditPage(item) {
    this.router.navigate(['/pages/patients/' + item._id + '/edit']);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
