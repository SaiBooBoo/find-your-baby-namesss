import { Component, Input } from '@angular/core';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  imports: [NzFloatButtonModule],
  selector: 'app-float-name-list',
  styleUrl: './float-name-list.scss',
  templateUrl: './float-name-list.html',
})
export class FloatNameList {
  @Input() checkedCount = 0;
}
