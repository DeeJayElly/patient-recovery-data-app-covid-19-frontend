import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PatientWarningScoreEditComponent} from './patient-warning-score-edit.component';

describe('PatientWarningScoreEditComponent', () => {
  let component: PatientWarningScoreEditComponent;
  let fixture: ComponentFixture<PatientWarningScoreEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientWarningScoreEditComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientWarningScoreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
