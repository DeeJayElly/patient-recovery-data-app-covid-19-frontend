import {Component, Input} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {Location} from '@angular/common';

@Component({
  selector: 'ngx-showcase-dialog',
  templateUrl: 'showcase-dialog.component.html',
  styleUrls: ['showcase-dialog.component.scss'],
})
export class ShowcaseDialogComponent {

  @Input() title: string;

  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>,
              public location: Location) {
  }

  dismiss() {
    this.ref.close();
    this.location.back();
  }
}
