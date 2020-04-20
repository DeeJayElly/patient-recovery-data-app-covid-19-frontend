import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PatientRelevantDataCreateComponent} from './patient-relevant-data-create.component';

describe('PatientRelevantDataCreateComponent', () => {
  let component: PatientRelevantDataCreateComponent;
  let fixture: ComponentFixture<PatientRelevantDataCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientRelevantDataCreateComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRelevantDataCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
