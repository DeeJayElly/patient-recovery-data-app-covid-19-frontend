import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PatientRelevantDataViewComponent} from './patient-relevant-data-view.component';

describe('PatientRelevantDataViewComponent', () => {
  let component: PatientRelevantDataViewComponent;
  let fixture: ComponentFixture<PatientRelevantDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientRelevantDataViewComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRelevantDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
