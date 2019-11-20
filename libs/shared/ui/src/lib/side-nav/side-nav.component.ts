import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { MenuItem } from './side-nav.config';

@Component({
  selector: 'iresa-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
  @Input()
  menuItems: MenuItem[];

  @Input()
  activeItem: string;

  @Output()
  menuClick = new EventEmitter<MenuItem>();

  constructor() {}

  onMenuClick(item) {
    this.menuClick.emit(item);
  }
}
