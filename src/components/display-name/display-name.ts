import { Component, Input } from '@angular/core';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule } from 'ng-zorro-antd/table';

interface BabyName {
  id: number;
  name: string;
  sex: string;
}

@Component({
  imports: [NzCheckboxModule, NzTableModule],
  selector: 'app-display-name',
  styleUrl: './display-name.scss',
  templateUrl: './display-name.html',
})
export class DisplayName {
  readonly names: BabyName[] = [
  { id: 1, name: 'Sofia', sex: 'Female' },
  { id: 2, name: 'Jack', sex: 'Male' },
  { id: 3, name: 'Emma', sex: 'Female' },
  { id: 4, name: 'Liam', sex: 'Male' },
  { id: 5, name: 'Olivia', sex: 'Female' },
  { id: 6, name: 'Noah', sex: 'Male' },
  { id: 7, name: 'Ava', sex: 'Female' },
  { id: 8, name: 'Ethan', sex: 'Male' },
  { id: 9, name: 'Isabella', sex: 'Female' },
  { id: 10, name: 'Lucas', sex: 'Male' },
  { id: 11, name: 'Mia', sex: 'Female' },
  { id: 12, name: 'Mason', sex: 'Male' },
  { id: 13, name: 'Amelia', sex: 'Female' },
  { id: 14, name: 'Oliver', sex: 'Male' },
  { id: 15, name: 'Charlotte', sex: 'Female' },
  { id: 16, name: 'Benjamin', sex: 'Male' },
  { id: 17, name: 'Harper', sex: 'Female' },
  { id: 18, name: 'Elijah', sex: 'Male' },
  { id: 19, name: 'Evelyn', sex: 'Female' },
  { id: 20, name: 'James', sex: 'Male' },
];

  selectedIds = new Set<number>();
  @Input() searchTerm = '';

  get filteredNames(): BabyName[] {
    const query = this.searchTerm.trim().toLowerCase();

    return this.names.filter((name) =>
      name.name.toLowerCase().includes(query)
    );
  }

  get checked(): boolean {
    return this.names.length > 0 && this.selectedIds.size === this.names.length;
  }

  get indeterminate(): boolean {
    return this.selectedIds.size > 0 && !this.checked;
  }

  onAllChecked(checked: boolean): void {
    this.selectedIds = checked
      ? new Set(this.names.map(({ id }) => id))
      : new Set<number>();
  }

  onItemChecked(id: number, checked: boolean): void {
    const selectedIds = new Set(this.selectedIds);
    if (checked) {
      selectedIds.add(id);
    } else {
      selectedIds.delete(id);
    }
    this.selectedIds = selectedIds;
  }
}
