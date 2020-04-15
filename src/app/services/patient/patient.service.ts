import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Patient} from '../../models/patient.model';
import {HttpClient} from '@angular/common/http';
import {WarningScore} from '../../models/warning-score.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {

  constructor(public http: HttpClient) {
  }

  /**
   * Get all patients function
   */
  public getAllPatients() {
    return this.http.get<Patient[]>(`${environment.apiUrl}/patient`)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Create new score for patient function
   *
   * @param scoreForm
   * @param patientId
   */
  public createNewScoreForPatient(scoreForm, patientId) {
    return this.http.post<WarningScore>(`${environment.apiUrl}/warning-score/patient/${patientId}`, {
      years: scoreForm.years,
      numberOfRespirations: scoreForm.numberOfRespirations,
      oxygenSaturation: scoreForm.oxygenSaturation,
      anyAdditionalO2: scoreForm.anyAdditionalO2,
      systolicPressure: scoreForm.systolicPressure,
      heartRate: scoreForm.heartRate,
      stateOfConsciousness: scoreForm.stateOfConsciousness,
      bodyTemperature: scoreForm.bodyTemperature,
      coughDegree: scoreForm.coughDegree,
    })
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Get single patient function
   *
   * @param patientId
   */
  public getPatient(patientId: string) {
    return this.http.get<Patient>(`${environment.apiUrl}/patient/${patientId}`)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Set patient function
   *
   * @param data
   */
  public setPatient(data: Patient) {
    return this.http.post<Patient>(`${environment.apiUrl}/patient`, data)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Delete patient function
   *
   * @param patientId
   */
  public deletePatient(patientId: string) {
    return this.http.delete<Patient>(`${environment.apiUrl}/patient/${patientId}`)
      .pipe(map((response) => {
        return response;
      }));
  }
}
