import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NbSpinnerService} from '@nebular/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'ngx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';

  get f() {
    return this.signUpForm.controls;
  }

  constructor(public spinnerService: NbSpinnerService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/pages/home']);
    }
  }

  ngOnInit(): void {
    this.spinnerService.load();
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cityOrRegion: ['', Validators.required],
      country: ['', Validators.required],
      hospital: ['', Validators.required],
      role: ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  /**
   * Submit function
   */
  public onSubmit() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.signUp(
      this.f.email.value,
      this.f.password.value,
      this.f.firstName.value,
      this.f.lastName.value,
      this.f.cityOrRegion.value,
      this.f.country.value,
      this.authService.currentUserValue.token,
      this.f.hospital.value,
      this.f.role.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
