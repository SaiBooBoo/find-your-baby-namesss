import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  imports: [FormsModule, NzInputModule, NzIconModule],
  selector: 'app-search-component',
  styleUrl: './search-component.scss',
  templateUrl: './search-component.html',
})
export class SearchComponent {
  value = '';
  readonly isLoading = signal(false);

  @Output() searchChange = new EventEmitter<string>();

  onValueChange(value: string): void {
    this.value = value;
    this.searchChange.emit(value);
  }

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
}
