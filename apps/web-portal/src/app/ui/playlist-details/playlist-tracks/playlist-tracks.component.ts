import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { WebPlaybackFacade } from '@iresa/web-portal-data';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'iresa-portal-playlist-tracks',
  templateUrl: './playlist-tracks.component.html',
  styleUrls: ['./playlist-tracks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistTracksComponent implements OnInit {
  constructor(private wpFacade: WebPlaybackFacade) {}

  @Input()
  set tracks(value) {
    if (value && value.length > 0) {
      this._tracks = value;
      this.loadDataSource(value);
    }
  }

  displayedColumns: string[] = ['select', 'name', 'artists', 'duration_ms'];
  _tracks: any[];
  _dataSource = new BehaviorSubject<any[]>([]);
  ngOnInit() {}

  get dataSource$() {
    return this._dataSource.asObservable();
  }
  playSong(index) {
    const track = this._tracks[index];
    this.wpFacade.setQueue([track]);
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
