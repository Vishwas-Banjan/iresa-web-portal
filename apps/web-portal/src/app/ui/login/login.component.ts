import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'iresa-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
