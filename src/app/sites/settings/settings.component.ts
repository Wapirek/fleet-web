import { Component, ViewChild } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/settings/_helpers/structure-builder.helper';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { first } from 'rxjs';
import { User } from 'src/app/auth/_models/user.model';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder.directive';
import { DebtModalComponent } from 'src/app/shared-standalone/modals/debt-modal/debt-modal.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  // catch event when user click in import file
  @ViewChild(PlaceholderDirective, { static: true })
  modalHost!: PlaceholderDirective;

  skeleton = StructureBuilderHelper;

  constructor(private authService: AuthService) {
    this.authService.user
      .pipe(first())
      .subscribe((user: User | null) => this.skeleton.leftSide.user.name = user?.name ?? '');
  }

  // jedna funkcja do ktorej przychodza eventy z przyciskow
  operation(codeName: string): void {
    switch (codeName) {
      case 'profit':
        this.manageProfit();
        break;
      case 'deleteAccount':
        break;
    }
  }

  private manageProfit(): void {
    if (!this.modalHost) { return; }
    const componentRef = this.modalHost.viewContainerRef.createComponent(DebtModalComponent);
    componentRef.instance.closeModal.subscribe(() => componentRef.destroy());
  }
}
