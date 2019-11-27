import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {}

  onPlaylistClick(playlist) {
    this.router.navigate(['/playlist-tracks', playlist.recordId]);
  }
}
