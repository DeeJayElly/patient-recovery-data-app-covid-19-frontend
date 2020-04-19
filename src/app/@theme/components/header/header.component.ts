import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMediaBreakpointsService, NbMenuItem, NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';
import {UserData} from '../../../@core/data/users';
import {LayoutService} from '../../../@core/utils';
import {map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [/*{title: 'Profile'}*/, {title: 'Log out'}];

  items: NbMenuItem[] = [
    {
      title: 'Change language',
      expanded: true,
    },
    {
      title: 'English',
    },
    {
      title: 'German',
    },
  ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              public authService: AuthService,
              public translateService: TranslateService,
              public router: Router) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => {
        this.user = {
          name: '',
        };
        if (this.authService.currentUserValue) {
          this.user.name = this.authService.currentUserValue.user.firstName + ' '
            + this.authService.currentUserValue.user.lastName;
        }
      });

    const {xl} = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({name}) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Change theme function
   *
   * @param themeName
   */
  public changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  /**
   * Change language function
   *
   * @param lang
   */
  public changeLanguage(lang: string) {
    this.translateService.use(lang);
    this.translateService.setDefaultLang(lang);
  }

  /**
   * Toggle sidebar function
   */
  public toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  /**
   * Navigate home function
   */
  public navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
