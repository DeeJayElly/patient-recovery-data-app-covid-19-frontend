import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Doctor} from '../../models/doctor.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DoctorService {
  constructor(private http: HttpClient) {
  }

  public getAll() {
    return this.http.get<Doctor[]>(`${environment.apiUrl}/doctors`)
      .pipe(map((response) => {
        return response;
      }));
  }
}
