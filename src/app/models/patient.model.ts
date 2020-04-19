import {WarningScore} from './warning-score.model';
import {PatientRelevantData} from './patient-relevant-data.model';

export class Patient {
  _id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex: string;
  address: string;
  contact: string;
  assignedDoctor: string;
  drugAllergy?: boolean;
  smoking?: boolean;
  coronaryHeartDisease?: boolean;
  heartArrhythmia?: boolean;
  heartFailure?: boolean;
  lungDisease?: boolean;
  asthma?: boolean;
  chronicKidneyDisease?: boolean;
  diabetes?: boolean;
  heartStroke?: boolean;
  malignantDisease?: boolean;
  chronicLiverDisease?: boolean;
  inflamatoryBowelDisease?: boolean;
  reuma?: boolean;
  hiv?: boolean;
  medications?: string[];
  operations?: string[];
  warningScores?: WarningScore[];
  patientRelevantData?: PatientRelevantData[];
}
