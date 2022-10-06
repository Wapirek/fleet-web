import { Component } from '@angular/core';
import { StructureBuilderHelper, StructureBuilderModel } from 'src/app/sites/dashboard/_helpers/structure-builder.helper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  skeleton: StructureBuilderModel = StructureBuilderHelper;
}
