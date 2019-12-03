import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WebPlaybackFacade } from '@iresa/web-portal-data';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'iresa-portal-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueueComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'artists', 'duration_ms'];
  _dataSource = new BehaviorSubject<any[]>([]);

  constructor(private playback: WebPlaybackFacade) {}

  ngOnInit() {}

  get position$() {
    return this.playback.position$;
  }

  get dataSource$() {
    return this.playback.queue$.pipe(map(list => this.loadDataSource(list)));
  }

  loadDataSource(list) {
    if (list.length > 0) {
      return list.map(item => {
        const data = {};
        this.displayedColumns.forEach(col => {
          if (item[col]) {
            data[col] = item[col];
          }
        });
        return data;
      });
    }
    return [];
  }
}
