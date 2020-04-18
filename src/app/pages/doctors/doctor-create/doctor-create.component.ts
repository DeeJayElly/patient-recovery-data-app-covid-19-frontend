import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {User} from '../../../models/user.model';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {ShowcaseDialogComponent} from "../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component";
import {NbDialogService} from "@nebular/theme";

@Component({
  selector: 'ngx-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.scss'],
})
export class DoctorCreateComponent implements OnInit {
  public doctorCreateForm: FormGroup;
  public submitted = false;
  public doctor: any;
  public error: any;

  get f() {
    return this.doctorCreateForm.controls;
  }

  constructor(public formBuilder: FormBuilder,
              public doctorService: DoctorService,
              public dialogService: NbDialogService) {
    this.doctorCreateForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cityOrRegion: ['', Validators.required],
      hospitalName: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  /**
   * Open dialog function
   */
  public openDialog() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'New doctor information have been successfully added',
      },
    });
  }

  /**
   * On submit function
   */
  public onSubmit() {
    this.doctorService.setDoctor(this.doctorCreateForm.value)
      .pipe(first())
      .subscribe(
        (data: User) => {
          if (data) {
            this.openDialog();
          }
        },
        error => {
          this.error = error;
        });
  }
}
