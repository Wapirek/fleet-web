import { Component, ViewChild } from '@angular/core';
import { ShortBtnCodeName, StructureBuilderHelper, StructureBuilderModel } from 'src/app/sites/dashboard/_helpers/structure-builder.helper';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder.directive';
import { TransactionModalComponent } from 'src/app/shared/components/modals/transaction-modal/transaction-modal.component';

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

  constructor() {}

  // switch function for button inside shorts template
  shortsSwitch(btn: ShortBtnCodeName): void {
    const response: { [key: string]: any } = {
      'transactionAdd': () => this.transactionAdd(),
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

  private transactionAdd(): void {
    this.openModal();
  }
}
