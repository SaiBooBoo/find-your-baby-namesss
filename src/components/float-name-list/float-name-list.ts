import { Component, Input, inject } from '@angular/core';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { BabyName } from '../../display-name/baby-name.model';
import { SelectedNamesModal } from './selected-names-modal';

@Component({
  imports: [NzFloatButtonModule, NzModalModule, SelectedNamesModal],
  selector: 'app-float-name-list',
  styleUrl: './float-name-list.scss',
  templateUrl: './float-name-list.html',
})
export class FloatNameList {
  @Input() checkedCount = 0;
  @Input() selectedNames: BabyName[] = [];

  private readonly modal = inject(NzModalService);

  openSelectedNamesModal(): void {
    this.modal.create({
      nzTitle: 'Selected Names',
      nzContent: SelectedNamesModal,
      nzComponentParams: { names: this.selectedNames },
      nzFooter: null,
    });
  }
}
