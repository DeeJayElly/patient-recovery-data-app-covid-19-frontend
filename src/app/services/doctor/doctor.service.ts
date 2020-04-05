import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Doctor} from '../../models/doctor.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DoctorService {
  constructor(private http: HttpClient) {
  }

  public getAllDoctors() {
    return this.http.get<Doctor[]>(`${environment.apiUrl}/doctor`)
      .pipe(map((response) => {
        return response;
      }));
  }

  public getDoctor(doctorId: string) {
    return this.http.get<Doctor>(`${environment.apiUrl}/doctor/${doctorId}`)
      .pipe(map((response) => {
        return response;
      }));
  }

  public updateDoctor(doctorEditForm, doctorId: string) {
    return this.http.put<Doctor>(`${environment.apiUrl}/doctor/${doctorId}`, {
      email: doctorEditForm.email,
      firstName: doctorEditForm.firstName,
      lastName: doctorEditForm.lastName,
      cityOrRegion: doctorEditForm.cityOrRegion,
      hospitalName: doctorEditForm.hospitalName,
      country: doctorEditForm.country,
    })
      .pipe(map((response) => {
        return response;
      }));
  }
}
