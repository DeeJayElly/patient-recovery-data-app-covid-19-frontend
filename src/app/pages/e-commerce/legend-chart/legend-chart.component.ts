import {Component, Input} from '@angular/core';
import {NgxLegendItemColor} from './enum.legend-item-color';

@Component({
  selector: 'ngx-legend-chart',
  styleUrls: ['./legend-chart.component.scss'],
  templateUrl: './legend-chart.component.html',
})
export class ECommerceLegendChartComponent {
  @Input()
  legendItems: { iconColor: NgxLegendItemColor; title: string }[] = [];
}
