import { Component } from '@angular/core';
import { StructureBuilderArray } from 'src/app/sites/statistics/_arrays/structure-builder.array';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  skeleton = StructureBuilderArray;

}
