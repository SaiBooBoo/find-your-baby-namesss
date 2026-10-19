import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SelectedNamesModal } from './selected-names-modal';
import { BabyName } from '../display-name/baby-name.model';

@Component({
  imports: [NzFloatButtonModule],
  selector: 'app-float-name-list',
  styleUrl: './float-name-list.scss',
  templateUrl: './float-name-list.html',
})
export class FloatNameList {
  @Input() checkedCount = 0;
  @Input() selectedNames: BabyName[] = [];
  @Output() removeName = new EventEmitter<number>();

  private readonly modal = inject(NzModalService);

  openSelectedNamesModal(): void {
    const modalRef = this.modal.create({
      nzContent: SelectedNamesModal,
    });
    const instance = modalRef.componentInstance!;
    instance.names = this.selectedNames;

    instance.removeName.subscribe((id: number) => {
      this.removeName.emit(id);
    });
  }
}
