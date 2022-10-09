import { Component } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/statistics/_helpers/structure-builder.helper';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  skeleton = StructureBuilderHelper;

}
