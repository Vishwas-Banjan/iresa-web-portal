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
import { Router } from '@angular/router';
import { environment } from '@iresa/web-portal/env';

@Component({
  selector: 'iresa-portal-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicSearchComponent implements OnInit, OnDestroy {
  searchInput = new FormControl();
  subs = new SubSink();

  constructor(private dbFacade: DashboardFacade, private router: Router) {}

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
          tap(value => this.dbFacade.search(value.trim()))
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
    const mapFn = {
      artist: this.fetchArtistAlbums,
      album: this.fetchAlbum,
      track: this.fetchAlbumTracks
    };
    if (val.type in mapFn) {
      mapFn[val.type](val.id);
      this.dbFacade.setSelectedMenuItems('');
    }
  }
  fetchAlbumTracks = (id: string) => {
    throw new Error('Method not implemented.');
  };
  fetchAlbum = (id: string) => {
    this.router.navigate(['/album', id]);
  };

  fetchArtistAlbums = (id: string) => {
    throw new Error('Method not implemented.');
  };
}
