import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Doctor} from '../../models/doctor.model';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  private currentUserSubject: BehaviorSubject<Doctor>;
  public currentUser: Observable<Doctor>;

  constructor(private http: HttpClient, public router: Router) {
    this.currentUserSubject = new BehaviorSubject<Doctor>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  /**
   * Login function
   *
   * @param email
   * @param password
   */
  public login(email: string, password: string) {
    return this.http.post<{ email: string, password: string }>(`${environment.apiUrl}/auth/login`, {email, password})
      .pipe(map((user: Doctor) => {
        user.authData = window.btoa(email + ':' + password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  /**
   * Register function
   *
   * @param email
   * @param password
   * @param firstName
   * @param lastName
   * @param cityOrRegion
   * @param country
   * @param refreshToken
   * @param hospital
   * @param role
   */
  public signUp(email: string,
                password: string,
                firstName: string,
                lastName: string,
                cityOrRegion: string,
                country: string,
                refreshToken: string,
                hospital: string,
                role: string,
                ) {
    return this.http.post<Doctor>(`${environment.apiUrl}/doctor`, {
      email,
      password,
      firstName,
      lastName,
      cityOrRegion,
      country,
      refreshToken,
      hospital,
      role,
    })
      .pipe(map((user: Doctor) => {
        return user;
      }));
  }

  /**
   * Forgot password function
   *
   * @param email
   */
  public forgotPassword(email: string) {
    return this.http.post<{ email: string }>(`${environment.apiUrl}/auth/forgot-password`, {email})
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Reset password function
   *
   * @param newPassword
   */
  public resetPassword(newPassword: string) {
    return this.http.post<{ newPassword: string }>(`${environment.apiUrl}/auth/reset-password`, {newPassword})
      .pipe(map((response) => {
        return response;
      }));
  }

  /**
   * Refresh token function
   *
   * @param refreshToken
   */
  public refreshToken(refreshToken: string) {
    return this.http.post<{ newPassword: string }>(`${environment.apiUrl}/auth/refresh-token`, {refreshToken})
      .pipe(map((response) => {
        this.currentUserValue.authData = window.btoa(this.currentUserValue.email + ':' + this.currentUserValue.password);
        localStorage.setItem('currentUser', JSON.stringify(this.currentUserValue));
        this.currentUserSubject.next(this.currentUserValue);
        return this.currentUserValue;
      }));
  }

  /**
   * Logout function
   */
  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/sign-in']);
  }
}
