import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {first} from 'rxjs/operators';
import {Patient} from '../../../models/patient.model';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../../services/patient/patient.service';
import {WarningScore} from '../../../models/warning-score.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth/auth.service';
import {User} from '../../../models/user.model';
import {DoctorService} from '../../../services/doctor/doctor.service';

const DATA_STEP_1 = {
  firstName: {type: 'text', validations: {}, errors: {}, placeholder: 'First Name'},
  lastName: {type: 'text', validations: {}, errors: {}, placeholder: 'Last Name'},
  assignedDoctor: {type: 'text', validations: {}, errors: {}, placeholder: 'Assigned doctor'},
  dateOfBirth: {
    type: 'date',
    validations: {},
    errors: {},
    placeholder: 'Date of Birth',
  },
  sex: {type: 'text', validations: {}, errors: {}, placeholder: 'Sex'},
  address: {type: 'text', validations: {}, errors: {}, placeholder: 'Address'},
  contact: {type: 'text', validations: {}, errors: {}, placeholder: 'Contact'},
  travelToRiskCountriesInTheLast14Days: {
    type: 'text',
    validations: {},
    errors: {},
    placeholder: 'Travel To Risk Countries In The Last 14 Days:',
  },
  contactInTheLast14DaysWithAPersonWhoHasSymptoms: {
    type: 'text',
    validations: {},
    errors: {},
    placeholder: 'Contact In The Last 14 Days With A Person Who Has Symptoms',
  },
  haveYouBeenInContactWithPeopleWhoHaveTheCoronaVirusInTheLast14Days: {
    type: 'text',
    validations: {},
    errors: {},
    placeholder: 'Been in contact with person who has Corona Virus:',
  },
  haveYouEverBeenToAHealthCareFacilityWhereTheDiseaseHasBeenDiagnosedWithANewCoronavirus: {
    type: 'text',
    validations: {},
    errors: {},
    placeholder: 'Ever been to a health care facility where the disease has been diagnosed:',
  },
  didYouGoForAExaminationSomewhere: {type: 'text', validations: {}, errors: {}, placeholder: 'Been to examination:'},
};

const DATA_STEP_2 = {
  address: {type: 'textarea', validations: {}, errors: {}, placeholder: 'Full Address'},
};

const DATA_STEP_3 = {
  phone: {
    type: 'phone',
    validations: {
      pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/,
    },
    errors: {
      pattern: 'Please enter a valid phone number',
    },
    placeholder: 'Contact Number',
  },
  otp: {
    type: 'number',
    validations: {
      required: true,
      minLength: 4,
    },
    errors: {
      required: 'This field can not be left blank',
      minlength: 'Minimum length should be 4 characters',
    },
    placeholder: 'One Time Password',
  },
};

const STEP_ITEMS = [
  {label: 'Step 1', data: DATA_STEP_1},
  {label: 'Step 2', data: DATA_STEP_2},
  {label: 'Step 3', data: DATA_STEP_3},
  {label: 'Review & Submit', data: {}},
];

export {STEP_ITEMS};

@Component({
  selector: 'ngx-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss'],
})

export class PatientEditComponent implements OnInit {
  @Input() formContent: any;

  @Output() readonly formSubmit: EventEmitter<any> = new EventEmitter<any>();

  activeStepIndex: number;
  currentFormContent: Array<any>;
  formData: any;
  formFields: Array<Array<string>>;
  masterFormFields: Array<string>;
  stepItems: Array<any>;
  masterForm: Array<FormGroup>;
  public patient: Patient | undefined;
  public error: any;
  public warningScores: WarningScore[];
  public submitted = false;
  public patientEditForm: FormGroup;

  get f() {
    return this.patientEditForm.controls;
  }

  constructor(private route: ActivatedRoute,
              private patientService: PatientService,
              private formBuilder: FormBuilder,
              private auth: AuthService,
              private doctorService: DoctorService) {
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

    this.activeStepIndex = 0;
    this.masterForm = [];
    this.currentFormContent = [];
    this.formFields = [];
    this.stepItems = this.formContent ? this.formContent : STEP_ITEMS;
    // NOTE: this can be cofigured to create a single form when needed
    this.stepItems.forEach((data, i) => {
      // holds name, validators, placeholder of all steps
      this.currentFormContent.push(this.stepItems[i]['data']);

      // holds string values for each field of all steps
      this.formFields.push(Object.keys(this.currentFormContent[i]));

      // holds all form groups
      this.masterForm.push(this.buildForm(this.currentFormContent[i]));
    });


  }

  // get validator(s) for each field, if any
  getValidators(formField: any): Validators {
    const fieldValidators = Object.keys(formField.validations).map(validator => {
      if (validator === 'required') {
        return Validators[validator];
      } else {
        return Validators[validator](formField.validations[validator]);
      }
    });

    return fieldValidators;
  }

  // get validation error messages per error, per field
  getValidationMessage(formIndex: number, formFieldName: string): string {
    const formErrors = this.masterForm[formIndex].get(formFieldName).errors;
    const errorMessages = this.currentFormContent[formIndex][formFieldName]
      .errors;
    const validationError = errorMessages[Object.keys(formErrors)[0]];

    return validationError;
  }

  goToStep(step: string): void {
    this.activeStepIndex =
      step === 'prev' ? this.activeStepIndex - 1 : this.activeStepIndex + 1;

    this.setFormPreview();
  }

  setFormPreview(): void {
    this.formData = this.masterForm.reduce(
      (masterForm, currentForm) => ({...masterForm, ...currentForm.value}),
      {},
    );

    this.masterFormFields = Object.keys(this.formData);
  }

  onFormSubmit(): void {
    /*const data: Patient = {
      assignedDoctor: this.formData.value.assignedDoctor,
      firstName: this.formData.value.firstName,
      dateOfBirth: this.formData.value.dateOfBirth,
      sex: this.formData.value.sex,
      address: this.formData.value.address,
      contact: this.formData.value.contact,
      travelToRiskCountriesInTheLast14Days: this.formData.value.travelToRiskCountriesInTheLast14Days,
      contactInTheLast14DaysWithAPersonWhoHasSymptoms: this.formData.value.contactInTheLast14DaysWithAPersonWhoHasSymptoms,
      haveYouBeenInContactWithPeopleWhoHaveTheCoronaVirusInTheLast14Days: this.formData.value.haveYouBeenInContactWithPeopleWhoHaveTheCoronaVirusInTheLast14Days,
      haveYouEverBeenToAHealthCareFacilityWhereTheDiseaseHasBeenDiagnosedWithANewCoronavirus:
      this.formData.value.haveYouEverBeenToAHealthCareFacilityWhereTheDiseaseHasBeenDiagnosedWithANewCoronavirus,
      didYouGoForAExaminationSomewhere: this.formData.value.didYouGoForAExaminationSomewhere,
    }; */
    // this.patientService.setPatient(data);
  }

  trackByFn(index: number): number {
    return index;
  }

  // build separate FormGroups for each form
  buildForm(currentFormContent: any): FormGroup {
    const formDetails = Object.keys(currentFormContent).reduce(
      (obj, key) => {
        obj[key] = ['', this.getValidators(currentFormContent[key])];

        return obj;
      },
      {},
    );

    return this.formBuilder.group(formDetails);
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
          this.checkPatientToHospitalRelation();
        },
        error => {
          this.error = error;
        });
  }

  private checkPatientToHospitalRelation() {
    const user = this.auth.currentUserValue;
    const isFromSameHospital = this.doctorService.getDoctor(this.patient.assignedDoctor)
      .pipe(first())
      .subscribe(
        (data: User) => {
          if ((data.hospital === this.auth.currentUserValue.user.hospital && this.auth.currentUserValue.user.role === 'hospitalAdmin')
            || data._id === this.patient.assignedDoctor
            || user.user.role === 'superAdmin') {
            if (this.patient.warningScores.length) {
              this.warningScores = this.patient.warningScores;
            }
            this.editPatientForm();
          }
        },
        error => {
          return error;
        });
  }

  /**
   * Edit patient form function
   */
  public editPatientForm() {
    /*this.patientEditForm.patchValue({
      email: this.patient.email,
      firstName: this.patient.firstName,
      lastName: this.patient.lastName,
      cityOrRegion: this.patient.cityOrRegion,
      hospital: this.patient.hospital,
      country: this.patient.country,
    });*/
  }

  /**
   * Submit function
   */
  public onSubmit() {

  }
}
