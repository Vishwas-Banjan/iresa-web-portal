import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'iresa-portal-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistComponent implements OnInit {
  @Input()
  items: any[];

  @Input()
  title: string;

  constructor() {}

  ngOnInit() {}

  onPlaylistClick(playlist) {}
}
