import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap, startWith, filter } from 'rxjs/operators';
import { WebPlaybackFacade } from '@iresa/web-portal-data';
import { SubSink } from 'subsink';

@Component({
  selector: 'iresa-portal-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicSearchComponent implements OnInit, OnDestroy {
  searchInput = new FormControl();
  subs = new SubSink();

  constructor(private wpFacade: WebPlaybackFacade) {}

  ngOnInit() {
    this.onValueChange();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  get searchResults$() {
    return this.wpFacade.searchResults$;
  }

  onValueChange() {
    this.subs.add(
      this.searchInput.valueChanges
        .pipe(
          debounceTime(500),
          startWith(''),
          filter(val => val && val.trim() !== ''),
          tap(value => this.wpFacade.search(value))
        )
        .subscribe()
    );
  }
}
