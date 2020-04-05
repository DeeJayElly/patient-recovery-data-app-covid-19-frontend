import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NbSpinnerService} from '@nebular/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'ngx-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  get f() {
    return this.forgotPasswordForm.controls;
  }

  constructor(public spinnerService: NbSpinnerService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.spinnerService.load();
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public onSubmit() {
    this.submitted = true;
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.forgotPassword(this.f.email.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
