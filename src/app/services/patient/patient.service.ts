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

  public getAllPatients() {
    return this.http.get<Patient[]>(`${environment.apiUrl}/patient`)
      .pipe(map((response) => {
        return response;
      }));
  }

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

  public getPatient(patientId: string) {
    return this.http.get<Patient>(`${environment.apiUrl}/patient/${patientId}`)
      .pipe(map((response) => {
        return response;
      }));
  }

  public deletePatient(patientId: string) {
    return this.http.delete<Patient>(`${environment.apiUrl}/patient/${patientId}`)
      .pipe(map((response) => {
        return response;
      }));
  }
}
