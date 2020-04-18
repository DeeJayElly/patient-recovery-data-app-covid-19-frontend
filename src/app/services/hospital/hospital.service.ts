import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hospital} from '../../models/hospital.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  constructor(private http: HttpClient) {
  }

  /**
   * Get all hospitals function
   */
  public getAllHospitals() {
    return this.http.get<Hospital[]>(`${environment.apiUrl}/hospital`)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Get single hospitals function
   *
   * @param hospitalId
   */
  public getHospital(hospitalId: string) {
    return this.http.get<Hospital>(`${environment.apiUrl}/hospital/${hospitalId}`)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Set hospital function
   *
   * @param hospitalCreateForm
   */
  public setHospital(hospitalCreateForm: Hospital) {
    return this.http.post<Hospital>(`${environment.apiUrl}/hospital`, {
      name: hospitalCreateForm.name,
      address: hospitalCreateForm.address,
      numberOfBeds: hospitalCreateForm.numberOfBeds,
    })
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Delete hospital function
   *
   * @param hospitalId
   */
  public deleteHospital(hospitalId: string) {
    return this.http.delete<Hospital>(`${environment.apiUrl}/hospital/${hospitalId}`)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Update hospital function
   *
   * @param hospitalEditForm
   * @param hospitalId
   */
  public updateHospital(hospitalEditForm, hospitalId: string) {
    return this.http.put<Hospital>(`${environment.apiUrl}/hospital/${hospitalId}`, {
      name: hospitalEditForm.name,
      address: hospitalEditForm.address,
      numberOfBeds: hospitalEditForm.numberOfBeds,
    })
      .pipe(map((response) => {
        return response;
      }));
  }
}
