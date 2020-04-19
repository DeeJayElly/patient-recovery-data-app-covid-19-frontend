import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from './@core/utils';
import {SeoService} from './@core/utils';
import {TranslateService} from '@ngx-translate/core';
import {User} from './models/user.model';
import {AuthService} from './services/auth/auth.service';
import {Router} from '@angular/router';
import {NbMenuService} from '@nebular/theme';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  public currentUser: User;

  constructor(private analytics: AnalyticsService,
              private seoService: SeoService,
              public translate: TranslateService,
              private authService: AuthService,
              private router: Router,
              private menuService: NbMenuService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();

    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item.title);
      });
  }

  private onContecxtItemSelection(title) {
    if (title === 'Log out') {
      this.logout();
    }
  }

  /**
   * Logout function
   */
  public logout() {
    this.authService.logout();
    this.router.navigate(['/auth/sign-in']);
  }
}
