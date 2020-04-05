import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Doctor} from '../../models/doctor.model';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {
  private currentUserSubject: BehaviorSubject<Doctor>;
  public currentUser: Observable<Doctor>;

  constructor(private http: HttpClient) {
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

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
