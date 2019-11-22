import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SpotifyService } from '@iresa/ngx-spotify';

@Component({
  selector: 'iresa-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {}

  get authURL() {
    return this.spotifyService.authURL();
  }
}
