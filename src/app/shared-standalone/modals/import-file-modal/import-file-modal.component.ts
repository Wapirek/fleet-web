import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'import-file-modal',
  templateUrl: './import-file-modal.component.html',
  styleUrls: ['/import-file-modal.component.scss'],
  imports: [SharedModule]
})
export class ImportFileModalComponent {

  // tytuł komponentu
  title = 'Importuj dane z pliku';

  // active when user click on cross
  @Output() closeModal = new EventEmitter<void>();
}
