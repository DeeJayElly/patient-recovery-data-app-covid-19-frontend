import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {first} from 'rxjs/operators';
import {LocalDataSource} from 'ng2-smart-table';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss'],
})
export class DoctorsListComponent implements OnInit {
  public doctors: any;
  public error: any;

  constructor(public http: HttpClient,
              public doctorService: DoctorService,
              public router: Router) {
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {name: 'viewrecord', title: '<i class="nb-person"></i>'},
        {name: 'editrecord', title: '<i class="nb-edit"></i>'},
      ],
    },
    columns: {
      /* _id: {
        title: 'ID',
        type: 'number',
      }, */
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      cityOrRegion: {
        title: 'City / Region',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      country: {
        title: 'Country',
        type: 'string',
      },
      hospital: {
        title: 'Hospital Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  ngOnInit(): void {
    this.doctorService.getAllDoctors()
      .pipe(first())
      .subscribe(
        data => {
          this.doctors = data;
          this.source.load(this.doctors);
        },
        error => {
          this.error = error;
        });
  }

  /**
   * On custom action click function
   *
   * @param event
   */
  public onCustomAction(event) {
    switch (event.action) {
      case 'viewrecord':
        this.openDoctorViewPage(event.data);
        break;
      case 'editrecord':
        this.openDoctorEditPage(event.data);
    }
  }

  /**
   * Open doctor view page function
   *
   * @param item
   */
  public openDoctorViewPage(item) {
    this.router.navigate(['/pages/doctors/' + item._id]);
  }

  /**
   * Open doctor edit page function
   *
   * @param item
   */
  public openDoctorEditPage(item) {
    this.router.navigate(['/pages/doctors/' + item._id + '/edit']);
  }

  /**
   * On delete confirm function
   *
   * @param event
   */
  public onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
