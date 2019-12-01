import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'iresa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input()
  product;

  @Output()
  logout = new EventEmitter<null>();

  constructor() {}

  ngOnInit() {}

  onLogout() {
    this.logout.next();
  }
}
