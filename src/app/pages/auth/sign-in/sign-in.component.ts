import {Component, OnInit} from '@angular/core';
import {NbSpinnerService} from '@nebular/theme';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'ngx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  get f() {
    return this.loginForm.controls;
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
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.f.email.value, this.f.password.value)
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
