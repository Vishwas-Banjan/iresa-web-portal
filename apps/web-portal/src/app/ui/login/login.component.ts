import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';
import { SpotifyService } from '@iresa/ngx-spotify';
import { MatTabGroup } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iresa-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  @ViewChild('tabs', { static: false }) tabGroup: MatTabGroup;

  userForm: FormGroup;
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {}

  onLoginSuccess() {
    this.tabGroup.selectedIndex = 1;
  }

  get authURL() {
    return this.spotifyService.authURL();
  }
}
