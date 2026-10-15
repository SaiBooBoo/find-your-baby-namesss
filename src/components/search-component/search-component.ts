import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  imports: [FormsModule, NzInputModule, NzIconModule, NzButtonModule],
  selector: 'app-search-component',
  styleUrl: './search-component.scss',
  templateUrl: './search-component.html',
})
export class SearchComponent {
  value = '';
  readonly isLoading = signal(false);
  selectedSex: string | null = null;

  @Output() searchChange = new EventEmitter<string>();
  @Output() genderChange = new EventEmitter<string | null>();

  onSearch(): void {
    if (this.isLoading()) {
      return;
    }

    this.searchChange.emit(this.value);
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
    }, 300);
  }

    onGenderChange(sex: string): void {
    this.selectedSex = this.selectedSex === sex ? null : sex;
    this.genderChange.emit(this.selectedSex);
  }
}
