import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { WebPlaybackFacade, PlaylistsFacade } from '@iresa/web-portal-data';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'iresa-portal-playlist-tracks',
  templateUrl: './playlist-tracks.component.html',
  styleUrls: ['./playlist-tracks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistTracksComponent implements OnInit {
  constructor(
    private wpFacade: WebPlaybackFacade,
    private playlistService: PlaylistsFacade
  ) {}

  @Input()
  set playlist(value) {
    this._playlist = value;
    if (value && value.tracks.length > 0) {
      this._tracks = value.tracks;
      this.loadDataSource(value.tracks);
    }
    if (value.type !== 'favorite') {
      this.displayActionCol();
    }
  }

  displayedColumns: string[] = ['select', 'name', 'artists', 'duration_ms'];
  showActionCol = false;
  _tracks: any[];
  _dataSource = new BehaviorSubject<any[]>([]);
  _playlist: { tracks: any[]; type: string; recordId: string };

  ngOnInit() {}

  get dataSource$() {
    return this._dataSource.asObservable();
  }

  displayActionCol() {
    this.showActionCol = true;
    this.displayedColumns.push('action');
  }

  playSong(index) {
    const track = this._tracks[index];
    this.wpFacade.setQueue([track]);
  }

  delete(index) {
    this.playlistService.deletePlaylistTrack({
      playlistId: this._playlist.recordId,
      trackId: this._tracks[index].recordId
    });
  }

  loadDataSource(value) {
    const ds = value.map(item => {
      const data = {};
      this.displayedColumns.forEach(col => {
        if (item[col]) {
          data[col] = item[col];
        }
      });
      return data;
    });
    this._dataSource.next(ds);
  }
}
