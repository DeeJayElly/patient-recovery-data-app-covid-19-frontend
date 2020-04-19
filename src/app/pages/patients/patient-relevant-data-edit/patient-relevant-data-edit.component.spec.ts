import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PatientRelevantDataEditComponent} from './patient-relevant-data-edit.component';

describe('PatientRelevantDataEditComponent', () => {
  let component: PatientRelevantDataEditComponent;
  let fixture: ComponentFixture<PatientRelevantDataEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientRelevantDataEditComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRelevantDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
