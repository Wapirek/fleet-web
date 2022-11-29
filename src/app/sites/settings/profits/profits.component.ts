import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/sites/settings/_service/settings.service';

@Component({
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.scss']
})
export class ProfitsComponent implements OnInit {

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settingsService.getCashFlowList().subscribe(
      r => console.log(r)
    )
  }
}
