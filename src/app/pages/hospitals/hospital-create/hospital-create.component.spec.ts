import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalCreateComponent } from './hospital-create.component';

describe('HospitalCreateComponent', () => {
  let component: HospitalCreateComponent;
  let fixture: ComponentFixture<HospitalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
