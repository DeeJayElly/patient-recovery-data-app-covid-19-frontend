import {Component, OnInit} from '@angular/core';
import {NbSpinnerService} from '@nebular/theme';

@Component({
  selector: 'ngx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(public spinnerService: NbSpinnerService) {
  }

  ngOnInit(): void {
    this.spinnerService.load();
  }
}
