import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'massive-transaction-modal',
  templateUrl: './massive-transaction.component.html',
  styleUrls: ['./massive-transaction.component.scss'],
  imports: [SharedModule]
})
export class MassiveTransactionComponent {}
