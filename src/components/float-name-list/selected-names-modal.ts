import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { BabyName } from '../../display-name/baby-name.model';

@Component({
  selector: 'app-selected-names-modal',
  imports: [NzButtonModule, NzModalModule],
  template: `
    <div nz-modal-title>Selected Names ({{ names.length }})</div>
    <div nz-modal-body>
      @if (names.length) {
        <ul class="selected-names-list">
          @for (name of names; track name.id) {
            <li>{{ name.name }} ({{ name.sex }})</li>
          }
        </ul>
      } @else {
        <p>No names selected.</p>
      }
    </div>
    <div nz-modal-footer>
      <button nz-button nzDanger (click)="modalRef.close()">Close</button>
    </div>
  `,
})
export class SelectedNamesModal {
  @Input() names: BabyName[] = [];

  constructor(public modalRef: NzModalRef) {}
}
