import { ChangeDetectorRef, Component, ComponentFactoryResolver, Type, ViewChild } from '@angular/core';
import { ShortBtnCodeName, StructureBuilderHelper, StructureBuilderModel } from 'src/app/sites/dashboard/_helpers/structure-builder.helper';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder.directive';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionModalComponent } from 'src/app/shared/components/modals/transaction-modal/transaction-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  // catch event when user click in import file
  @ViewChild(PlaceholderDirective, { static: false })
  modalHost: PlaceholderDirective | undefined;

  skeleton: StructureBuilderModel = StructureBuilderHelper;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}


  // switch function for button inside shorts template
  shortsSwitch(btn: ShortBtnCodeName): void {
    const response: { [key: string]: any } = {
      'transactionAdd': this.transactionAdd,
      'goalAdd': this.transactionAdd,
      'transactions': this.transactionAdd,
      'fileImport': this.transactionAdd,
      'debtAdd': this.transactionAdd,
    };

    response[btn]();
  }

  // // open modal with import file component
  private openModal(modal: Type<TransactionModalComponent>): void {

    const modalCmpFactory = this.componentFactoryResolver.resolveComponentFactory(modal);

    if (this.modalHost) {

      const hostViewContainerRef = this.modalHost.viewContainerRef;
      hostViewContainerRef.clear();

      const componentRef = hostViewContainerRef.createComponent(modalCmpFactory);

      const sub = componentRef.instance.closeModal.subscribe(() => {
        hostViewContainerRef.clear();
        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: null,
        }).then();
      });
    }
  }

  private transactionAdd(): void {
    this.openModal(TransactionModalComponent);
  }
}
