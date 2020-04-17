import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalViewComponent } from './hospital-view.component';

describe('HospitalViewComponent', () => {
  let component: HospitalViewComponent;
  let fixture: ComponentFixture<HospitalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
