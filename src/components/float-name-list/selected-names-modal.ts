import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { BabyName } from '../display-name/baby-name.model';

@Component({
  selector: 'app-selected-names-modal',
  imports: [NzButtonModule, NzModalModule, NzTableModule],
  template: `
    <div nz-modal-title>Selected Names ({{ names.length }})</div>
    <div nz-modal-body>
      <nz-table
        #selectedNamesTable
        [nzData]="names"
        [nzFrontPagination]="false"
        [nzShowPagination]="false"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          @for (name of selectedNamesTable.data; track name.id) {
            <tr>
              <td>{{ name.id }}</td>
              <td>{{ name.name }}</td>
              <td>{{ name.sex }}</td>
              <td>
                <button
                  nz-button
                  nzDanger
                  nzSize="small"
                  (click)="remove(name.id)"
                >
                  Remove
                </button>
              </td>
            </tr>
          } @empty {
            <tr>
              <td colspan="4">No names selected.</td>
            </tr>
          }
        </tbody>
      </nz-table>
    </div>
  `,
})
export class SelectedNamesModal {
  @Input() names: BabyName[] = [];
  @Output() removeName = new EventEmitter<number>();

  constructor(public modalRef: NzModalRef) {}

  remove(id: number): void {
    this.names = this.names.filter((name) => name.id !== id);
    this.removeName.emit(id);
  }
}
