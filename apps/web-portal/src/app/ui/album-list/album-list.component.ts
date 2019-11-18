import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { AlbumsFacade } from '@iresa/web-portal-data';

@Component({
  selector: 'iresa-portal-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumListComponent implements OnInit, OnDestroy {
  constructor(private albumFacade: AlbumsFacade) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.albumFacade.resetStates();
  }

  get albums$() {
    return this.albumFacade.allAlbums$;
  }

  onAlbumClick(album) {}
}
