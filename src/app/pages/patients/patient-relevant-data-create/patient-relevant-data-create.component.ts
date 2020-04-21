import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PatientService} from '../../../services/patient/patient.service';
import {ActivatedRoute} from '@angular/router';
import {NbDialogService} from '@nebular/theme';
import {first} from 'rxjs/operators';
import {Patient} from '../../../models/patient.model';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {PatientRelevantData} from '../../../models/patient-relevant-data.model';

@Component({
  selector: 'ngx-patient-relevant-data-create',
  templateUrl: './patient-relevant-data-create.component.html',
  styleUrls: ['./patient-relevant-data-create.component.scss'],
})
export class PatientRelevantDataCreateComponent implements OnInit {
  public patientRelevantDataForm: FormGroup;
  public submitted = false;
  public patientId: any;
  public patient: any;
  public error: any;

  get f() {
    return this.patientRelevantDataForm.controls;
  }

  constructor(public patientService: PatientService,
              private formBuilder: FormBuilder,
              public route: ActivatedRoute,
              public dialogService: NbDialogService) {
    this.patientRelevantDataForm = this.formBuilder.group({
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
        },
        error => {
          this.error = error;
        });
  }

  private openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'Patient relevant data has been successfully updated',
      },
    });
  }

  /**
   * On submit function
   */
  public onSubmit() {
    this.patientService.setPatientRelevantData(this.patientRelevantDataForm.value, this.patientId)
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
