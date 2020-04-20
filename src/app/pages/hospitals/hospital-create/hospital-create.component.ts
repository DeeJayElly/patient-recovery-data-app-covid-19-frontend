import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HospitalService} from '../../../services/hospital/hospital.service';
import {ActivatedRoute} from '@angular/router';
import {NbDialogService} from '@nebular/theme';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {first} from 'rxjs/operators';
import {Hospital} from '../../../models/hospital.model';

@Component({
  selector: 'ngx-hospital-create',
  templateUrl: './hospital-create.component.html',
  styleUrls: ['./hospital-create.component.scss'],
})
export class HospitalCreateComponent implements OnInit {
  public hospitalCreateForm: FormGroup;
  public submitted = false;
  public hospital: any;
  public error: any;

  get f() {
    return this.hospitalCreateForm.controls;
  }

  constructor(private formBuilder: FormBuilder,
              public hospitalService: HospitalService,
              public route: ActivatedRoute,
              public dialogService: NbDialogService) {
    this.hospitalCreateForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      numberOfBeds: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  private openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'New hospital has been successfully added',
      },
    });
  }

  /**
   * On submit function
   */
  public onSubmit() {
    this.hospitalService.setHospital(this.hospitalCreateForm.value)
      .pipe(first())
      .subscribe(
        (data: Hospital) => {
          if (data) {
            this.openDialog();
          }
        },
        error => {
          this.error = error;
        });
  }
}
