import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService,
  ) {
  }

  /**
   * Guard for can activate route function
   *
   * @param route
   * @param state
   */
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if ((route.url[0].path === 'edit' || route.url[0].path === 'add')) {
      this.router.navigate(['/pages']);
      return currentUser.user.role !== 'doctor';
    }
    if (currentUser) {
      return true;
    }
    this.router.navigate(['/auth/sign-in']);
    return false;
  }
}
