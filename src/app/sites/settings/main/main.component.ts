import { Component, OnDestroy, ViewChild } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/settings/main/_helpers/structure-builder.helper';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { User } from 'src/app/auth/_models/user.model';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder.directive';
import { ProfitModalComponent } from 'src/app/shared-standalone/modals/profit-modal/profit-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Subscription, switchMap } from 'rxjs';
import { ProfitModel } from 'src/app/shared/models/models/settings/profit.model';
import { SettingsService } from 'src/app/sites/settings/_service/settings.service';

@Component({
  selector: 'settings-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {

  // ustawienie modala w aktualnym templacie html
  @ViewChild(PlaceholderDirective, { static: true })
  modalHost!: PlaceholderDirective;

  // struktura html
  skeleton = StructureBuilderHelper;

  private subscription!: Subscription;

  constructor(
    private settingsService: SettingsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.subscription = this.activatedRoute.data.subscribe(({ response }) => {

      // set response data as User
      const user = response as User | null;

      if (user) {
        this.skeleton.leftSide.user.name = response?.name ?? '';
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

    const sub1 = componentRef.instance.closeModal.subscribe(() => componentRef.destroy());

    const sub2 = componentRef.instance.goTo.subscribe(() => {
      componentRef.destroy();
      this.router.navigate(['przychody'], { relativeTo: this.activatedRoute }).then()
    });

    componentRef.instance.save
      .pipe(
        switchMap((form: any) => this.settingsService.addCashFlow(form as ProfitModel)),
        first()
      )
      .subscribe((profit: ProfitModel) => {
        console.log(profit);
      });

    this.subscription.add(sub1);
    this.subscription.add(sub2);
  }

  ngOnDestroy(): void { this.subscription.unsubscribe(); }
}
