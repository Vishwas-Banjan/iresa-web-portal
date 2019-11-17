import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap, startWith, filter } from 'rxjs/operators';
import { DashboardFacade } from '@iresa/web-portal-data';
import { SubSink } from 'subsink';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'iresa-portal-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicSearchComponent implements OnInit, OnDestroy {
  searchInput = new FormControl();
  subs = new SubSink();

  constructor(private dbFacade: DashboardFacade) {}

  ngOnInit() {
    this.onValueChange();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  get searchResults$() {
    return this.dbFacade.searchResults$;
  }

  onValueChange() {
    this.subs.add(
      this.searchInput.valueChanges
        .pipe(
          debounceTime(500),
          startWith(''),
          filter(val => val && typeof val === 'string' && val.trim() !== ''),
          tap(value => this.dbFacade.search(value))
        )
        .subscribe()
    );
  }

  displayFn = item => {
    if (item) {
      return item.name;
    }
  };

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    const val = event.option.value;
    if (val.type === 'artist') {
    }
  }
}
