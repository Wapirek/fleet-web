import { Component } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/settings/_helpers/structure-builder.helper';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { first } from 'rxjs';
import { User } from 'src/app/auth/_models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  skeleton = StructureBuilderHelper;

  constructor(private authService: AuthService) {
    this.authService.user
      .pipe(first())
      .subscribe((user: User | null) => this.skeleton.leftSide.user.name = user?.name ?? '');
  }
}
