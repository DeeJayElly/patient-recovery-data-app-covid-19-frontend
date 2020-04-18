import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DoctorService {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  /**
   * Get all doctors function
   */
  public getAllDoctors() {
    return this.http.get<User[]>(`${environment.apiUrl}/doctor`)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Get single doctor function
   *
   * @param doctorId
   */
  public getDoctor(doctorId: string) {
    return this.http.get<User>(`${environment.apiUrl}/doctor/${doctorId}`)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Set doctor function
   *
   * @param data
   */
  public setDoctor(data: User) {
    return this.http.post<User[]>(`${environment.apiUrl}/doctor`, data)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Delete doctor function
   *
   * @param doctorId
   */
  public deleteDoctor(doctorId: string) {
    return this.http.delete<User[]>(`${environment.apiUrl}/doctor/${doctorId}`)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Update doctor function
   *
   * @param doctorEditForm
   * @param doctorId
   */
  public updateDoctor(doctorEditForm, doctorId: string) {
    return this.http.put<User>(`${environment.apiUrl}/doctor/${doctorId}`, {
      email: doctorEditForm.email,
      firstName: doctorEditForm.firstName,
      lastName: doctorEditForm.lastName,
      cityOrRegion: doctorEditForm.cityOrRegion,
      hospital: doctorEditForm.hospital,
      country: doctorEditForm.country,
      password: doctorEditForm.password,
      refreshToken: this.authService.currentUserValue.token.refreshToken,
      role: 'doctor',
    })
      .pipe(map((response) => {
        return response;
      }));
  }
}
