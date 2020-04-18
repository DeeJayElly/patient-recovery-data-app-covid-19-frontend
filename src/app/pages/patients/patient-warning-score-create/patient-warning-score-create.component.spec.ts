import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PatientWarningScoreCreateComponent} from './patient-warning-score-create.component';

describe('PatientWarningScoreCreateComponent', () => {
  let component: PatientWarningScoreCreateComponent;
  let fixture: ComponentFixture<PatientWarningScoreCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientWarningScoreCreateComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientWarningScoreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
