import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PatientWarningScoreViewComponent} from './patient-warning-score-view.component';

describe('PatientWarningScoreViewComponent', () => {
  let component: PatientWarningScoreViewComponent;
  let fixture: ComponentFixture<PatientWarningScoreViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientWarningScoreViewComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientWarningScoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
