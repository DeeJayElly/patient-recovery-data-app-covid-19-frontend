import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Patient} from '../../models/patient.model';
import {HttpClient} from '@angular/common/http';
import {WarningScore} from '../../models/warning-score.model';
import {PatientRelevantData} from '../../models/patient-relevant-data.model';

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
   * Get all patients warning scores function
   *
   * @param patientId
   */
  public getAllPatientsWarningScores(patientId: string) {
    return this.http.get<WarningScore[]>(`${environment.apiUrl}/warning-score/patient/${patientId}`)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Get single patient warning scores function
   *
   * @param warningScoreId
   */
  public getSinglePatientWarningScores(warningScoreId: string) {
    return this.http.get<string | number | boolean>(`${environment.apiUrl}/warning-score/${warningScoreId}`)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Delete single patient warning scores function
   *
   * @param warningScoreId
   */
  public deleteSinglePatientWarningScores(warningScoreId: string) {
    return this.http.delete<string | number | boolean>(`${environment.apiUrl}/warning-score/${warningScoreId}`)
      .pipe(map((response) => {
        return response;
      }));
  }


  /**
   * Update single patient warning scores function
   *
   * @param data
   * @param warningScoreId
   */
  public updateSinglePatientWarningScores(data: WarningScore, warningScoreId: string) {
    return this.http.put<WarningScore>(`${environment.apiUrl}/warning-score/${warningScoreId}`, data)
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

  /**
   * Update patient function
   *
   * @param data
   * @param patientId
   */
  public updatePatient(data: Patient, patientId: string) {
    return this.http.put<Patient>(`${environment.apiUrl}/patient/${patientId}`, data)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Get patient single relevant data function
   *
   * @param patientId
   */
  public getAllPatientRelevantData(patientId: string) {
    return this.http.get<PatientRelevantData>(`${environment.apiUrl}/patient-relevant-data/patient/${patientId}`)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Get patient single relevant data function
   *
   * @param patientRelevantDataId
   */
  public getPatientRelevantData(patientRelevantDataId: string) {
    return this.http.get<PatientRelevantData>(`${environment.apiUrl}/patient-relevant-data/${patientRelevantDataId}`)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Set patient relevant data function
   *
   * @param data
   * @param patientId
   */
  public setPatientRelevantData(data: PatientRelevantData, patientId: string) {
    return this.http.post<PatientRelevantData>(`${environment.apiUrl}/patient-relevant-data/patient/${patientId}`, data)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Update patient relevant data function
   *
   * @param data
   * @param patientRelevantDataId
   */
  public updatePatientRelevantData(data: PatientRelevantData, patientRelevantDataId: string) {
    return this.http.put<PatientRelevantData>(`${environment.apiUrl}/patient-relevant-data/${patientRelevantDataId}`, data)
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Delete patient relevant data function
   *
   * @param patientRelevantDataId
   */
  public deletePatientRelevantData(patientRelevantDataId: string) {
    return this.http.delete<PatientRelevantData>(`${environment.apiUrl}/patient-relevant-data/${patientRelevantDataId}`)
      .pipe(map((response) => {
        return response;
      }));
  }
}
