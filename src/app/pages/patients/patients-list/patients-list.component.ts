import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {first} from 'rxjs/operators';
import {PatientService} from '../../../services/patient/patient.service';

@Component({
  selector: 'ngx-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
})
export class PatientsListComponent implements OnInit {
  public patients: any;
  public error: any;
  constructor(public patientService: PatientService) {
  }

  settings = {
    hideSubHeader: true,
    actions: false,
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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
