import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { PollFacade } from '@iresa/web-portal-data';
import { timer } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'iresa-portal-poll-result',
  templateUrl: './poll-result.component.html',
  styleUrls: ['./poll-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PollResultComponent implements OnInit, OnDestroy {
  constructor(private poll: PollFacade) {}

  displayedColumns: string[] = ['name', 'artists', 'upvoteCount'];

  subs = new SubSink();

  ngOnInit() {
    this.polling();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  polling() {
    this.subs.add(timer(0, 20000).subscribe(t => this.poll.loadAll()));
  }

  get dataSource$() {
    return this.poll.all$;
  }
}
