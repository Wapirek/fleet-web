import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss']
})
export class TransactionModalComponent {

  // active when user click on cross
  @Output() closeModal = new EventEmitter<void>();
}
