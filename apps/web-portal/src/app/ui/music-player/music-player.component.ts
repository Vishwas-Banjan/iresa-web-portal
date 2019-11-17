import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WindowRef } from '@iresa/shared/utilities';

@Component({
  selector: 'iresa-portal-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicPlayerComponent implements OnInit {
  constructor(private winRef: WindowRef) {}

  ngOnInit() {}
}
