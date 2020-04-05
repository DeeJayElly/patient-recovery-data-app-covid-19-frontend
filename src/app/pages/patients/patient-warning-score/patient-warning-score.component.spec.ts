import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PatientWarningScoreComponent} from './patient-warning-score.component';

describe('PatientWarningScoreComponent', () => {
  let component: PatientWarningScoreComponent;
  let fixture: ComponentFixture<PatientWarningScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientWarningScoreComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientWarningScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
