import { Component } from "@angular/core";

@Component({
  selector: 'shared-modal-style-1',
  template: `
    <div class="backdrop"></div>
    <div class="transparent-box">
      <div class="modal"><ng-content></ng-content></div>
    </div>
  `,
  styleUrls: ['modal-style-1.component.scss'],
})
export class ModalStyle1Component {}
