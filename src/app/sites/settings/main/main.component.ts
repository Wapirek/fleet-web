import { Component, OnDestroy, ViewChild } from '@angular/core';
import { StructureBuilderArray } from 'src/app/sites/settings/main/_arrays/structure-builder.array';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder.directive';
import { ProfitModalComponent } from 'src/app/shared-standalone/modals/profit-modal/profit-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first, merge, Subscription, switchMap } from 'rxjs';
import { ProfitModel } from 'src/app/shared/models/models/settings/profit.model';
import { SettingsService } from 'src/app/sites/settings/_service/settings.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';

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
  skeleton = StructureBuilderArray;

  private subscription!: Subscription;

  constructor(
    private authService: AuthService,
    private settingsService: SettingsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.skeleton.leftSide.user.name = this.authService.user.getValue()?.name ?? '';
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

    // sprawdza czy istnieje derektywa do umieszczenia modala
    if (!this.modalHost) { return; }

    // miejsce komponentu modalnego
    const componentRef = this.modalHost.viewContainerRef.createComponent(ProfitModalComponent);

    this.subscription = merge(
      componentRef.instance.closeModal.pipe(map(() => 'closeModal')),
      componentRef.instance.goTo.pipe(map(() => 'goTo')),
      componentRef.instance.save
    ).pipe(
      map(res => {
        switch (res) {
          case 'closeModal':
            componentRef.destroy();
            return false;
          case 'goTo':
            this.router.navigate(['przychody'], { relativeTo: this.activatedRoute }).then();
            componentRef.destroy();
            return false;
          default:
            return res;
        }
      }),
      filter(res => res),
      switchMap((form: any) => this.settingsService.addCashFlow(form as ProfitModel)), first()
    ).subscribe(
      () => {
        this.snackBar.open('Przychód dodany');
        componentRef.destroy();
      },
      () => this.snackBar.open('Co poszło nie tak')
    )
  }

  ngOnDestroy(): void { this.subscription.unsubscribe(); }
}
