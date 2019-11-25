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
      track: this.fetchAlbumTracks,
      playlist: this.fetchPlaylistTracks
    };
    if (val.type in mapFn) {
      mapFn[val.type](val);
      this.dbFacade.setSelectedMenuItems('');
    }
  }
  fetchAlbumTracks = track => {
    this.router.navigate(['/album', track.album.id, track.track_number]);
  };
  fetchAlbum = album => {
    this.router.navigate(['/album', album.id]);
  };

  fetchArtistAlbums = artist => {
    this.router.navigate(['/artist', artist.id, 'albums']);
  };

  fetchPlaylistTracks = playlist => {
    this.router.navigate(['/playlist', playlist.id, 'tracks']);
  };
}
