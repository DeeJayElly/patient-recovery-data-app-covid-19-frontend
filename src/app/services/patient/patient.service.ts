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

  public createNewPatient(numberOfRespirations, oxygenSaturation, systolicPressure, heartRate,
                         stateOfConsciousness, bodyTemperature, coughDegree, score, patientId) {
    return this.http.post<{
      years: number,
      numberOfRespirations: number,
      oxygenSaturation: number,
      anyAdditionalO2: boolean,
      systolicPressure: number,
      heartRate: number,
      stateOfConsciousness: string,
      bodyTemperature: number,
      coughDegree: number,
      score: number,
    }>(`${environment.apiUrl}/warning-score/patient/${patientId}`, {
      numberOfRespirations,
      oxygenSaturation,
      systolicPressure,
      heartRate,
      stateOfConsciousness,
      bodyTemperature,
      coughDegree,
      score,
    })
      .pipe(map((response) => {
        return response;
      }));
  }
}
