import { Component } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/settings/_helpers/structure-builder.helper';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  skeleton = StructureBuilderHelper;
}
