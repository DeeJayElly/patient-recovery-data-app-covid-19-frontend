import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient/patient.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public patients: any;
  results = [
    { name: 'Germany', value: 8940 },
    { name: 'USA', value: 5000 },
    { name: 'France', value: 7200 },
  ];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  themeSubscription: any;

  constructor(public patientService: PatientService) {
  }

  ngOnInit(): void {
    this.patientService.getAllPatients()
      .pipe(first())
      .subscribe(
        data => {
          this.patients = data;
          this.results.push(this.patients);
        },
        error => {
          // this.error = error;
        });
  }

}
