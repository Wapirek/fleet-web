import { Component, ViewChild } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/settings/main/_helpers/structure-builder.helper';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { User } from 'src/app/auth/_models/user.model';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder.directive';
import { ProfitModalComponent } from 'src/app/shared-standalone/modals/profit-modal/profit-modal.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'settings-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  // ustawienie modala w aktualnym templacie html
  @ViewChild(PlaceholderDirective, { static: true })
  modalHost!: PlaceholderDirective;

  // struktura html
  skeleton = StructureBuilderHelper;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.activatedRoute.data.subscribe(({ response }) => {

      // set response data as User
      const user = response as User | null;

      if (user) {
        this.skeleton.leftSide.user.name = response?.name ?? ''
      }
    });
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
    const componentRef = this.modalHost.viewContainerRef.createComponent(ProfitModalComponent);

    componentRef.instance.closeModal.subscribe(() => componentRef.destroy());

    componentRef.instance.goTo.subscribe(() => {
      componentRef.destroy();
      this.router.navigate(['przychody'], {
        relativeTo: this.activatedRoute
      }).then()
    });
  }
}
