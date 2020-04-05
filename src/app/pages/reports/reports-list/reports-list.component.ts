import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {ReportService} from '../../../services/report/report.service';

@Component({
  selector: 'ngx-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
})
export class ReportsListComponent implements OnInit {
  public error: any;
  public success: string;

  constructor(private reportService: ReportService) {
  }

  ngOnInit(): void {
  }

  public downloadCSVReport() {
    this.reportService.downloadCSVReport()
      .pipe(first())
      .subscribe(
        (data: any) => {
          this.success = 'CSV file has been successfully exported';
        },
        error => {
          this.error = error;
        });
  }
}
