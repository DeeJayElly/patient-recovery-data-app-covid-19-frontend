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

  public get currentUserValue(): Doctor {
    return this.currentUserSubject.value;
  }

  public login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, {email, password})
      .pipe(map((user: Doctor) => {
        user.authData = window.btoa(email + ':' + password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  public signUp(email: string,
                password: string,
                firstName: string,
                lastName: string,
                cityOrRegion: string,
                hospitalName: string,
                country: string) {
    return this.http.post<any>(`${environment.apiUrl}/doctor`, {
      email,
      password,
      firstName,
      lastName,
      cityOrRegion,
      hospitalName,
      country,
    })
      .pipe(map((user: Doctor) => {
        return user;
      }));
  }

  public forgotPassword(email: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/forgot-password`, {email})
      .pipe(map((response) => {
        return response;
      }));
  }

  public resetPassword(newPassword: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/reset-password`, {newPassword})
      .pipe(map((response) => {
        return response;
      }));
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/sign-in']);
  }
}
