import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../../models/user.model';
import {PatientService} from '../../../services/patient/patient.service';
import {ActivatedRoute} from '@angular/router';
import {NbDialogService} from '@nebular/theme';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {AuthService} from '../../../services/auth/auth.service';
import {first} from 'rxjs/operators';
import {Patient} from '../../../models/patient.model';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {PatientRelevantData} from '../../../models/patient-relevant-data.model';

@Component({
  selector: 'ngx-patient-relevant-data-edit',
  templateUrl: './patient-relevant-data-edit.component.html',
  styleUrls: ['./patient-relevant-data-edit.component.scss'],
})
export class PatientRelevantDataEditComponent implements OnInit {
  public patientRelevantDataEditForm: FormGroup;
  public submitted = false;
  public patientId: any;
  public patient: any;
  public error: any;
  public doctors: User[];
  public canEditPatient: boolean;
  public patientRelevantData: PatientRelevantData;

  get f() {
    return this.patientRelevantDataEditForm.controls;
  }

  constructor(public patientService: PatientService,
              private formBuilder: FormBuilder,
              public route: ActivatedRoute,
              public dialogService: NbDialogService,
              private doctorService: DoctorService,
              private auth: AuthService) {
    this.patientRelevantDataEditForm = this.formBuilder.group({
      travelToRiskCountriesInTheLast14Days: [false],
      contactInTheLast14DaysWithAPersonWhoHasSymptoms: [false],
      haveYouBeenInContactWithPeopleWhoHaveTheCoronaVirusInTheLast14Days: [false],
      haveYouEverBeenToAHealthCareFacilityWhereTheDiseaseHasBeenDiagnosedWithANewCoronavirus: [false],
      didYouGoForAExaminationSomewhere: [false],
      symptoms: [''],
      symptomsDuration: [''],
      highTemperature: [false],
      shaking: [false],
      lossOfAppetite: [false],
      exhaustion: [false],
      muscleAchesAndPains: [false],
      boneOrJointPain: [false],
      cough: [false],
      expectoration: [false],
      shortnessOfBreath: [false],
      choking: [false],
      fatigue: [false],
      chestPressure: [false],
      chestPain: [false],
      sneezing: [false],
      nasalCongestion: [false],
      secretionFromTheNose: [false],
      bleedingFromTheNose: [false],
      eyesPain: [false],
      redEyes: [false],
      throatProblems: [false],
      throatSecretion: [false],
      headache: [false],
      abdominalPain: [false],
      nausea: [false],
      vomit: [false],
      diarrhea: [false],
      backPain: [false],
      urinaryProblems: [false],
      rash: [false],
      enlargedLymphNodes: [false],
      neuroInterferences: [false],
      increasedBloodPressure: [false],
      positiveToCoronavirus: [false],
      curedOfCoronavirus: [false],
    });
  }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.params['id'];
    this.getPatientDetails(this.patientId);
  }

  /**
   * Get patient details function
   *
   * @param patientId
   */
  public getPatientDetails(patientId) {
    this.patientService.getPatient(patientId)
      .pipe(first())
      .subscribe(
        (data: Patient) => {
          this.patient = data;
          this.getAllDoctors();
        },
        error => {
          this.error = error;
        });
  }

  private getAllDoctors() {
    this.doctorService.getAllDoctors()
      .pipe(first())
      .subscribe(
        (data: User[]) => {
          this.doctors = data;
          this.doctors = this.doctors.filter(doctor => doctor.role === 'doctor');
          this.canEditPatient = this.checkDoctorToPatientRelation();
          if (this.canEditPatient) {
            this.getPatientRelevantData();
          }
        },
        error => {
          this.error = error;
        });
  }

  private getPatientRelevantData() {
    this.patientService.getAllPatientRelevantData(this.patientId)
      .pipe(first())
      .subscribe(
        (data: PatientRelevantData) => {
          this.patientRelevantData = data;
          this.editPatientForm();
        },
        error => {
          this.error = error;
        });
  }

  private checkDoctorToPatientRelation() {
    const user = this.auth.currentUserValue;
    const filteredDoctor = this.doctors.filter(doctor => this.patient.assignedDoctor === doctor._id);
    return (this.patient.assignedDoctor === user.user._id && user.user.role === 'doctor')
      || (filteredDoctor.length && user.user.role === 'hospitalAdmin' ?
        filteredDoctor[0].hospital === user.user.hospital && user.user.role === 'hospitalAdmin' : false)
      || user.user.role === 'superAdmin';
  }

  /**
   * Edit patient relevant data form function
   */
  public editPatientForm() {
    this.patientRelevantDataEditForm.patchValue({
      travelToRiskCountriesInTheLast14Days: this.patientRelevantData
        ? this.patientRelevantData.travelToRiskCountriesInTheLast14Days :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].travelToRiskCountriesInTheLast14Days,
      contactInTheLast14DaysWithAPersonWhoHasSymptoms: this.patientRelevantData
        ? this.patientRelevantData.contactInTheLast14DaysWithAPersonWhoHasSymptoms :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].contactInTheLast14DaysWithAPersonWhoHasSymptoms,
      haveYouBeenInContactWithPeopleWhoHaveTheCoronaVirusInTheLast14Days: this.patientRelevantData
        ? this.patientRelevantData.haveYouBeenInContactWithPeopleWhoHaveTheCoronaVirusInTheLast14Days :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].haveYouBeenInContactWithPeopleWhoHaveTheCoronaVirusInTheLast14Days,
      haveYouEverBeenToAHealthCareFacilityWhereTheDiseaseHasBeenDiagnosedWithANewCoronavirus: this.patientRelevantData
        ? this.patientRelevantData.haveYouEverBeenToAHealthCareFacilityWhereTheDiseaseHasBeenDiagnosedWithANewCoronavirus :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].haveYouEverBeenToAHealthCareFacilityWhereTheDiseaseHasBeenDiagnosedWithANewCoronavirus,
      didYouGoForAExaminationSomewhere: this.patientRelevantData
        ? this.patientRelevantData.didYouGoForAExaminationSomewhere :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].didYouGoForAExaminationSomewhere,
      symptoms: this.patientRelevantData ? this.patientRelevantData.symptoms : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].symptoms,
      symptomsDuration: this.patientRelevantData ? this.patientRelevantData.symptomsDuration : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].symptomsDuration,
      highTemperature: this.patientRelevantData ? this.patientRelevantData.highTemperature : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].highTemperature,
      shaking: this.patientRelevantData ? this.patientRelevantData.shaking : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].shaking,
      lossOfAppetite: this.patientRelevantData ? this.patientRelevantData.lossOfAppetite : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].lossOfAppetite,
      exhaustion: this.patientRelevantData ? this.patientRelevantData.exhaustion : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].exhaustion,
      muscleAchesAndPains: this.patientRelevantData
        ? this.patientRelevantData.muscleAchesAndPains :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].muscleAchesAndPains,
      boneOrJointPain: this.patientRelevantData ? this.patientRelevantData.boneOrJointPain : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].boneOrJointPain,
      cough: this.patientRelevantData ? this.patientRelevantData.cough : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].cough,
      expectoration: this.patientRelevantData ? this.patientRelevantData.expectoration : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].expectoration,
      shortnessOfBreath: this.patientRelevantData
        ? this.patientRelevantData.shortnessOfBreath :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].shortnessOfBreath,
      choking: this.patientRelevantData ? this.patientRelevantData.choking : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].choking,
      fatigue: this.patientRelevantData ? this.patientRelevantData.fatigue : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].fatigue,
      chestPressure: this.patientRelevantData ? this.patientRelevantData.chestPressure : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].chestPressure,
      chestPain: this.patientRelevantData ? this.patientRelevantData.chestPain : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].chestPain,
      sneezing: this.patientRelevantData ? this.patientRelevantData.sneezing : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].sneezing,
      nasalCongestion: this.patientRelevantData ? this.patientRelevantData.nasalCongestion : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].nasalCongestion,
      secretionFromTheNose: this.patientRelevantData
        ? this.patientRelevantData.secretionFromTheNose :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].secretionFromTheNose,
      bleedingFromTheNose: this.patientRelevantData
        ? this.patientRelevantData.bleedingFromTheNose :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].bleedingFromTheNose,
      eyesPain: this.patientRelevantData ? this.patientRelevantData.eyesPain : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].eyesPain,
      redEyes: this.patientRelevantData ? this.patientRelevantData.redEyes : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].redEyes,
      throatProblems: this.patientRelevantData ? this.patientRelevantData.throatProblems : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].throatProblems,
      throatSecretion: this.patientRelevantData ? this.patientRelevantData.throatSecretion : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].throatSecretion,
      headache: this.patientRelevantData ? this.patientRelevantData.headache : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].headache,
      abdominalPain: this.patientRelevantData ? this.patientRelevantData.abdominalPain : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].abdominalPain,
      nausea: this.patientRelevantData ? this.patientRelevantData.nausea : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].nausea,
      vomit: this.patientRelevantData ? this.patientRelevantData.vomit : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].vomit,
      diarrhea: this.patientRelevantData ? this.patientRelevantData.diarrhea : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].diarrhea,
      backPain: this.patientRelevantData ? this.patientRelevantData.backPain : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].backPain,
      urinaryProblems: this.patientRelevantData ? this.patientRelevantData.urinaryProblems : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].urinaryProblems,
      rash: this.patientRelevantData ? this.patientRelevantData.rash : this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].rash,
      enlargedLymphNodes: this.patientRelevantData
        ? this.patientRelevantData.enlargedLymphNodes :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].enlargedLymphNodes,
      neuroInterferences: this.patientRelevantData
        ? this.patientRelevantData.neuroInterferences :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].neuroInterferences,
      increasedBloodPressure: this.patientRelevantData
        ? this.patientRelevantData.increasedBloodPressure :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].increasedBloodPressure,
      positiveToCoronavirus: this.patientRelevantData
        ? this.patientRelevantData.positiveToCoronavirus :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].positiveToCoronavirus,
      curedOfCoronavirus: this.patientRelevantData
        ? this.patientRelevantData.curedOfCoronavirus :
        this.patient.patientRelevantData[this.patient.patientRelevantData.length - 1].curedOfCoronavirus,
    });
  }

  private openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'Patient relevant data successfully updated',
      },
    });
  }

  /**
   * On submit function
   */
  public onSubmit() {
    this.patientService.updatePatientRelevantData(this.patientRelevantDataEditForm.value, this.patientId)
      .pipe(first())
      .subscribe(
        (data: PatientRelevantData) => {
          if (data) {
            this.openDialog();
          }
        },
        error => {
          this.error = error;
        });
  }
}
