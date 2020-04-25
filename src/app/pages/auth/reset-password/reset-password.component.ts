import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NbSpinnerService} from '@nebular/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'ngx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  public resetPasswordForm: FormGroup;
  public loading = false;
  public submitted = false;
  public error = '';
  public resetPasswordToken: string;

  get f() {
    return this.resetPasswordForm.controls;
  }

  constructor(public spinnerService: NbSpinnerService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.spinnerService.load();
    this.resetPasswordToken = this.route.snapshot.params['resetPasswordToken'];
    if (!this.resetPasswordToken) {
      this.router.navigate(['/pages/app']);
    }
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', Validators.required],
      newPasswordRepeat: ['', Validators.required],
    });
  }

  /**
   * Submit function
   */
  public onSubmit() {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.resetPassword(this.f.newPassword.value, this.resetPasswordToken)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          this.router.navigate(['/auth/sign-in']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
