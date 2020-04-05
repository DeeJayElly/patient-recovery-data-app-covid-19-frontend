import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from './@core/utils';
import {SeoService} from './@core/utils';
import {TranslateService} from '@ngx-translate/core';
import {Doctor} from './models/doctor.model';
import {AuthService} from './services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  public currentUser: Doctor;

  constructor(private analytics: AnalyticsService,
              private seoService: SeoService,
              public translate: TranslateService,
              private authService: AuthService,
              private router: Router) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/auth/sign-in']);
  }
}
