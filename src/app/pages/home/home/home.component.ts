import {Component, OnDestroy, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient/patient.service';
import {first} from 'rxjs/operators';
import {Patient} from '../../../models/patient.model';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public patients: any;
  public temperatureResults: any[];
  public scoreResults: any[];
  public yearsResults: any[];
  public showLegend = true;
  public showLabels = true;
  public showXAxis = true;
  public showYAxis = true;
  public xAxisLabel = 'Name';
  public yAxisLabel = 'Body Temperature';
  public yAxisLabelYears = 'Years';
  public showXAxisLabel = true;
  public showYAxisLabel = true;
  public themeSubscription: any;
  public colorScheme: any;
  public error: any;

  constructor(public patientService: PatientService, private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnInit(): void {
    this.patientService.getAllPatients()
      .pipe(first())
      .subscribe(
        data => {
          this.patients = data;
          this.temperatureResults = [];
          this.scoreResults = [];
          this.yearsResults = [];
          this.patients.map((patient: Patient) => {
            if (patient.warningScores.length) {
              this.temperatureResults.push(
                {
                  name: patient.firstName + ' ' + patient.lastName,
                  value: patient.warningScores[patient.warningScores.length - 1].bodyTemperature,
                });
              this.scoreResults.push(
                {
                  name: patient.firstName + ' ' + patient.lastName,
                  value: patient.warningScores[patient.warningScores.length - 1].score,
                });
              this.yearsResults.push(
                {
                  name: patient.firstName + ' ' + patient.lastName,
                  series: [
                    {
                      name: 'Years',
                      value: patient.warningScores[patient.warningScores.length - 1].years,
                    }, {
                      name: 'Number of respiration\'s',
                      value: patient.warningScores[patient.warningScores.length - 1].numberOfRespirations,
                    },
                  ],
                });
            }
          });
        },
        error => {
          this.error = error;
        });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
