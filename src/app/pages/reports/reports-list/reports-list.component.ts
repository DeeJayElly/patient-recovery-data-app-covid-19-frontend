import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {ReportService} from '../../../services/report/report.service';
import {saveAs} from 'file-saver';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'ngx-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
})
export class ReportsListComponent implements OnInit {
  public error: any;
  public env = environment;

  constructor(private reportService: ReportService) {
  }

  ngOnInit(): void {
  }

  /**
   * Download CSV report function
   */
  public downloadCSVReport() {
    this.reportService.downloadCSVReport()
      .pipe(first())
      .subscribe(
        (data: any) => {
          this.downloadFile(data);
        },
        error => {
          this.error = error;
        });
  }

  /**
   * Download file function
   *
   * @param data
   */
  private downloadFile(data: any) {
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(data[0]);
    const csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
    const blob = new Blob([csvArray], {type: 'text/csv'});
    const today = new Date();
    saveAs(blob, 'patientsData' + today + '.csv');
  }
}
