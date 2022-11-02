import { Component, ViewChild } from '@angular/core';
import { ShortBtnCodeName, StructureBuilderHelper, StructureBuilderModel } from 'src/app/sites/dashboard/_helpers/structure-builder.helper';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder.directive';
import { TransactionModalComponent } from 'src/app/shared/components/modals/transaction-modal/transaction-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  // catch event when user click in import file
  @ViewChild(PlaceholderDirective, { static: true })
  modalHost!: PlaceholderDirective;

  skeleton: StructureBuilderModel = StructureBuilderHelper;

  constructor(
    private router: Router
  ) {}

  // switch function for button inside shorts template
  shortsSwitch(btn: ShortBtnCodeName): void {
    const response: { [key: string]: any } = {
      'transactionAdd': () => this.transactionAdd(),
      'goalAdd': () => this.goalAdd(),
      'transactions': () => this.transactions()
    };

    response[btn]();
  }

  // // open modal with import file component
  private openModal(): void {

    if (this.modalHost) {
      const componentRef = this.modalHost.viewContainerRef.createComponent(TransactionModalComponent);
      componentRef.instance.closeModal.subscribe(() => componentRef.destroy());
    }
  }

  private goalAdd(): void {}

  private transactionAdd(): void {
    this.openModal();
  }

  private transactions(): void {
    this.router.navigate(['/transakcje']).then();
  }
}
