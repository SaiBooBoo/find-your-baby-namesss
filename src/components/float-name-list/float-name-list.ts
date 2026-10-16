import { Component, Input, inject } from '@angular/core';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SelectedNamesModal } from './selected-names-modal';


@Component({
  imports: [NzFloatButtonModule, SelectedNamesModal],
  selector: 'app-float-name-list',
  styleUrl: './float-name-list.scss',
  templateUrl: './float-name-list.html',
})
export class FloatNameList {
  @Input() checkedCount = 0;
  @Input() selectedNames: BabyName[] = [];

  private readonly modal = inject(NzModalService);

  openSelectedNamesModal(): void {
    const modalRef = this.modal.create({
      nzContent: SelectedNamesModal,
    });
    modalRef.componentInstance!.names = this.selectedNames;
  }
}
export interface BabyName {
  id: number;
  name: string;
  sex: 'Female' | 'Male';
}
