import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(public http: HttpClient) {
  }

  /**
   * Download csv report function
   */
  public downloadCSVReport() {
    return this.http.get<any>(`${environment.apiUrl}/patient/export/csv`)
      .pipe(map((response) => {
        return response;
      }));
  }
}
