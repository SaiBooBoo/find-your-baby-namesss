import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BabyName } from '../../display-name/baby-name.model';
import { SearchComponent } from '../../search-component/search-component';
import { DisplayName } from '../../display-name/display-name';
import { FloatNameList } from '../../float-name-list/float-name-list';

@Component({
  imports: [NzGridModule, NzLayoutModule, SearchComponent, DisplayName, FloatNameList],
  selector: 'app-main-layout',
  styleUrl: './main-layout.scss',
  templateUrl: './main-layout.html',
})
export class MainLayout {

  searchTerm = '';
  selectedSex: string | null = null;
  checkedCount = 0;
  selectedNames: BabyName[] = [];

  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }

  onGenderChange(sex: string | null): void {
    this.selectedSex = sex;
  }

  onCheckedChange(count: number): void {
    this.checkedCount = count;
  }

  onSelectedNamesChange(names: BabyName[]): void {
    this.selectedNames = names;
  }

  onRemoveName(id: number): void {
    this.selectedNames = this.selectedNames.filter((name) => name.id !== id);
    this.checkedCount = this.selectedNames.length;
  }
}
