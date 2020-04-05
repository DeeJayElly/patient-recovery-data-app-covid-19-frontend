import {Component} from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
      <span class="created-by">
      Copyright © 2020 <b><a href="https://www.datavscorona.com/" target="_blank">
        Data vs Corona Hackaton - Patient Recovery Data Application - Covid-19</a></b>
    </span>
      <div class="socials">
          <a href="https://github.com/DeeJayElly/patient-recovery-data-app-covid-19-frontend/"
             target="_blank" class="ion ion-social-github"></a>
      </div>
  `,
})
export class FooterComponent {
}
