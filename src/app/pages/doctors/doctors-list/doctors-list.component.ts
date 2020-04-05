import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'ngx-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss'],
})
export class DoctorsListComponent implements OnInit {
  public doctors: any;
  public error: any;
  constructor(public http: HttpClient, public doctorService: DoctorService) {
  }

  ngOnInit(): void {
    this.doctorService.getAll()
      .pipe(first())
      .subscribe(
        data => {
          this.doctors = data;
          debugger;
        },
        error => {
          this.error = error;
        });
  }
}
