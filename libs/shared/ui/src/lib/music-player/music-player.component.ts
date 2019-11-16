import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'iresa-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
