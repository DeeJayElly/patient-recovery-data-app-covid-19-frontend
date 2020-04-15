import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {Patient} from '../../../models/patient.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientService} from '../../../services/patient/patient.service';
import {WarningScore} from '../../../models/warning-score.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss'],
})
export class PatientEditComponent implements OnInit {
  public patient: Patient | undefined;
  public error: any;
  public warningScores: WarningScore[];
  public submitted = false;
  public patientEditForm: FormGroup;
  public radioGroupValue: any;

  get f() {
    return this.patientEditForm.controls;
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private patientService: PatientService,
              private formBuilder: FormBuilder) {
    this.patientEditForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      sex: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', Validators.required],
      travelToRiskCountriesInTheLast14Days: ['', Validators.required],
      contactInTheLast14DaysWithAPersonWhoHasSymptoms: ['', Validators.required],
      haveYouBeenInContactWithPeopleWhoHaveTheCoronaVirusInTheLast14Days: ['', Validators.required],
      haveYouEverBeenToAHealthCareFacilityWhereTheDiseaseHasBeenDiagnosedWithANewCoronavirus: ['', Validators.required],
      didYouGoForAExaminationSomewhere: ['', Validators.required],
      currentProblems: ['', Validators.required],
      problemsDuration: ['', Validators.required],
      highTemperature: ['', Validators.required],
      shaking: ['', Validators.required],
      lossOfAppetite: ['', Validators.required],
      exhaustion: ['', Validators.required],
      muscleAchesAndPains: ['', Validators.required],
      boneOrJointPain: ['', Validators.required],
      cough: ['', Validators.required],
      expectoration: ['', Validators.required],
      shortnessOfBreath: ['', Validators.required],
      choking: ['', Validators.required],
      fatigue: ['', Validators.required],
      chestPressure: ['', Validators.required],
      chestPain: ['', Validators.required],
      sneezing: ['', Validators.required],
      nasalCongestion: ['', Validators.required],
      secretionFromTheNose: ['', Validators.required],
      bleedingFromTheNose: ['', Validators.required],
      eyesPain: ['', Validators.required],
      redEyes: ['', Validators.required],
      throatProblems: ['', Validators.required],
      throatSecretion: ['', Validators.required],
      headache: ['', Validators.required],
      abdominalPain: ['', Validators.required],
      nausea: ['', Validators.required],
      vomit: ['', Validators.required],
      diarrhea: ['', Validators.required],
      backPain: ['', Validators.required],
      urinaryProblems: ['', Validators.required],
      rash: ['', Validators.required],
      enlargedLymphNodes: ['', Validators.required],
      neuroInterferences: ['', Validators.required],
      drugAllergy: ['', Validators.required],
      smoking: ['', Validators.required],
      increasedBloodPressure: ['', Validators.required],
      coronaryHeartDisease: ['', Validators.required],
      heartArrhythmia: ['', Validators.required],
      heartFailure: ['', Validators.required],
      lungDisease: ['', Validators.required],
      asthma: ['', Validators.required],
      chronicKidneyDisease: ['', Validators.required],
      diabetes: ['', Validators.required],
      heartStroke: ['', Validators.required],
      malignantDisease: ['', Validators.required],
      chronicLiverDisease: ['', Validators.required],
      inflamatoryBowelDisease: ['', Validators.required],
      reuma: ['', Validators.required],
      hiv: ['', Validators.required],
      medications: ['', Validators.required],
      operations: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const patientId = this.route.snapshot.params['id'];
    if (patientId) {
      this.getPatientDetails(patientId);
    } else {
      this.error = 'No details for this patient';
    }
  }

  public getPatientDetails(patientId) {
    this.patientService.getPatient(patientId)
      .pipe(first())
      .subscribe(
        (data: Patient) => {
          this.patient = data;
          if (this.patient.warningScores.length) {
            this.warningScores = this.patient.warningScores;
          }
          this.editPatientForm();
        },
        error => {
          this.error = error;
        });
  }

  public editPatientForm() {
    /*this.patientEditForm.patchValue({
      email: this.patient.email,
      firstName: this.patient.firstName,
      lastName: this.patient.lastName,
      cityOrRegion: this.patient.cityOrRegion,
      hospitalName: this.patient.hospitalName,
      country: this.patient.country,
    });*/
  }

  public onSubmit() {

  }
}
