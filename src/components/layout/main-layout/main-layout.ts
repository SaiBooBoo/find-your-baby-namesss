import { Component } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SearchComponent } from '../../search-component/search-component';
import { DisplayName } from '../../display-name/display-name';

@Component({
  imports: [NzBreadCrumbModule,
     NzIconModule,
     NzLayoutModule,
     NzMenuModule,
     SearchComponent,
     DisplayName],
  selector: 'app-main-layout',
  styleUrl: './main-layout.scss',
  templateUrl: './main-layout.html',
})
export class MainLayout {

  searchTerm = '';
  selectedSex: string | null = null;

  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }

  onGenderChange(sex: string | null): void {
    this.selectedSex = sex;
  }

}
